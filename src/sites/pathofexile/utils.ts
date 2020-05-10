import {calcOffer, saveToFile, sleep} from "@/utils/helpers";
import {globalLogger} from "@/utils/singletons";
import {ApiConsts} from "@/utils/consts";


export async function getData(offer: string): Promise<string> {
  const rows = Array.from(document.querySelectorAll(".resultset > [data-id]"));
  const existingIgs: {[ign: string]: boolean} = {};
  const whisperButtons: HTMLInputElement[] = rows.filter((a) => {
    const ign = a.querySelector(".profile-link")!.textContent!;
    const res = !existingIgs[ign];
    existingIgs[ign] = true;
    return res;
  }).map(
    (a) => a.querySelector(".whisper-btn"),
  ) as unknown as HTMLInputElement[];
  let fileContent = "";
  const initialText = await navigator.clipboard.readText();
  globalLogger.log("Found {} entries", whisperButtons.length)();
  for (let btnI = 0; btnI < whisperButtons.length; btnI++) {
    whisperButtons[btnI].click();
    const text = await navigator.clipboard.readText();
    if (text === initialText && !initialText.includes("I want to")) {
      throw Error("Copy functionality is broken");
    }
    fileContent += `${text} ${offer}\n`;
  }
  return fileContent;
}

function searchByText(element: HTMLElement, query: string, searchText: string, throwError = false): HTMLElement|null {
  var aTags = document.querySelectorAll(query);
  var found;
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent?.indexOf(searchText)! >= 0) { // undefined >= 0 === false
      return aTags[i] as HTMLElement;
    }
  }
  if (throwError) {
    throw Error(`Can't find ${query}::contains(${searchText}`)
  }
  return null;
}

const pathOfexileCurrencyRegex = /@(?<username>\S+) Hi, I'd like to buy your (?<buyvalue>\d+) (?<buycurrency>.*) for my (?<sellvalue>\d+) (?<sellcurrency>.+) in (?<league>\S+)\./;
export async function getCurrencyData(amount:number|0, priceLimit: number|0): Promise<string> {
  let fileContent: string = "";

  function getAllRows(): HTMLElement[] {
    return Array.from(document.querySelectorAll(".resultset > [data-id]"));
  }

  const rows: HTMLElement[] = getAllRows();
  globalLogger.log("Found {} entries", rows.length)();
  for (let row of rows) {
    let stock: number = parseInt(row.querySelector('.pull-left.stock span:first-child')!.textContent!) || 1;
    (searchByText(row, 'button', 'Contact...', true) as HTMLInputElement).click();
    await sleep(1); // wait vue to render box

    let inputRange: HTMLInputElement = row.querySelector('[name=points]') as HTMLInputElement;
    let maxValue = inputRange.value;
    for (let i =0; i<50; i++) {
      (inputRange.value as unknown as number)++;
      let event = new Event("input"); // trigger official SPA(vue) to rerender
      inputRange.dispatchEvent(event);
      await sleep(1); // wait vue to render box
      if (row.querySelector('.error')) {
       break; // untill not enough message appear
      }
    }
    (inputRange.value as unknown as number)--;
    let event = new Event("input"); // trigger official SPA(vue) to rerender
    inputRange.dispatchEvent(event);
    await sleep(1); // wait vue to render box

    let whisper: string = row.querySelector('textarea')!.value;

    let result: RegExpExecArray|null = pathOfexileCurrencyRegex.exec(whisper);
    if (!result) {
      globalLogger.warn(`Cant detect {} by {}`, whisper, pathOfexileCurrencyRegex)();
      fileContent += `${result} I need ${amount} worth`;
    } else {
      fileContent += calcOffer(priceLimit, amount, {
        league: result.groups!.league,
        buycurrency: result.groups!.buycurrency,
        sellcurrency: result.groups!.sellcurrency,
        buyvalue:  parseInt(result.groups!.buyvalue) || 1,
        sellvalue: parseInt(result.groups!.sellvalue) || 1,
        stock: stock,
        username: result.groups!.username,
      });
    }
  }
  // don't fail saving if error is here
  setTimeout(async () => {
    for (let row of getAllRows()) {
      let closeBtn = (searchByText(row, 'button', 'Close') as HTMLInputElement);
      if (closeBtn) {
        closeBtn.click();
        await sleep(1);
      }
    }
  })
  return fileContent;
}

export async function saveCurrenCurrencyData(amount: number, priceLimit: number): Promise<void> {
  let fileContent: string = await getCurrencyData(amount, priceLimit);
  saveToFile(fileContent)
}


async function loadMore(): Promise<boolean> {
  globalLogger.log("loading more entries")();
  const prevScrollHeight = document.body.scrollHeight;
  let j = 50;
  do {
    window.scrollTo(0, document.body.scrollHeight);
    (document.querySelector(".load-more-btn") as HTMLInputElement).click();
    if (prevScrollHeight !== document.body.scrollHeight) {
      break;
    }
    await sleep(200);
    j--;
  } while (j > 0);
  return j > 0;
}

async function loadUntilEnough(): Promise<void> {
  let i = ApiConsts.LOAD_MORE_TIMES;
  do {
    const pl = Array.from(document.querySelectorAll(".profile-link"));
    const uniqueIgns = new Set(pl.map((a) => a.textContent));
    if (uniqueIgns.size > ApiConsts.LOAD_MORE_WHISPERS) {
      globalLogger.log("reached 15 entries, exiting")();
      break;
    }
    i--;
    const loaded = await loadMore();
    if (!loaded) {
      globalLogger.log("Nothing loaded from last request, breaking from loop")();
      break;
    }
  } while (i > 0);
}

export async function saveCurrentData(price: string) {
  await loadUntilEnough();
  const test = await getData(price);
  saveToFile(test);
}
