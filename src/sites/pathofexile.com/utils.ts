import {calcOffer, saveToFile, sleep, waitForNode} from "@/utils/helpers";
import {globalLogger} from "@/utils/singletons";
import {ApiConsts} from "@/utils/consts";
import {GetProdHtmlNodeResult} from "@/types/model";
import Pathofexile from "@/sites/pathofexile.com/Pathofexile.vue";


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
  const initialText = await window.navigator.clipboard.readText();
  globalLogger.log("Found {} entries", whisperButtons.length)();
  for (let btnI = 0; btnI < whisperButtons.length; btnI++) {
    let btn = whisperButtons[btnI];
    console.log(btn)
    // btn.scrollIntoView();
    // await sleep(100);
    btn.click();
    await sleep(1)
    const text = await window.navigator.clipboard.readText();
    if (btnI === 0 && text === initialText && !initialText.includes("I want to")) {
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

const pathOfexileCurrencyRegex = /@(?<username>\S+) Hi, I'd like to buy your (?<sellvalue>\d+) (?<sellcurrency>.*) for my (?<buyvalue>\d+) (?<buycurrency>.+) in (?<league>\S+)\./;
export async function getCurrencyData(amount:number|0, priceLimit: number|0, minStackSize: number): Promise<string> {
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

    for (let i =0; i<50; i++) { //don't get into eternal loop, set max 50 inputs which is amount of range max value at pathofeixle
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

    let currentStackSize: number = parseInt(row.querySelector('.slider-left .price')!.textContent!);
    if (currentStackSize < minStackSize) {
      continue
    }

    let whisper: string = row.querySelector('textarea')!.value;

    let result: RegExpExecArray|null = pathOfexileCurrencyRegex.exec(whisper);
    if (!result) {
      globalLogger.warn(`Cant detect {} by {}`, whisper, pathOfexileCurrencyRegex)();
      if (amount) {
        fileContent += `${whisper} I need ${amount} worth.\n`;
      } else {
        fileContent += `${whisper}\n`;
      }
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

export async function saveCurrenCurrencyData(amount: number, priceLimit: number, minStackSize: number): Promise<void> {
  let fileContent: string = await getCurrencyData(amount, priceLimit, minStackSize);
  saveToFile(fileContent)
}


async function loadMore(): Promise<boolean> {
  globalLogger.log("loading more entries")();
  const prevScrollHeight = document.body.scrollHeight;
  let j = 50;
  do {
    window.scrollTo(0, document.body.scrollHeight);
    let loadMoreBtn: HTMLInputElement = document.querySelector(".load-more-btn") as HTMLInputElement;
    if (!loadMoreBtn) { // nothing more to load, btn won't show
      break
    }
    (loadMoreBtn).click();
    if (prevScrollHeight !== document.body.scrollHeight) {
      break;
    }
    await sleep(200);
    j--;
  } while (j > 0);
  window.scrollTo(0, 0);
  await sleep(500);
  return j > 0;
}

async function loadUntilEnough(loadMaxUniqueIgns: number): Promise<void> {
  let i = ApiConsts.LOAD_MORE_TIMES;
  do {
    const pl = Array.from(document.querySelectorAll(".profile-link"));
    const uniqueIgns = new Set(pl.map((a) => a.textContent));
    if (uniqueIgns.size > loadMaxUniqueIgns) {
      globalLogger.log("reached {} entries, exiting", loadMaxUniqueIgns)();
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

export async function saveCurrentData(price: string, loadMaxUniqueIgns: number) {
  await loadUntilEnough(loadMaxUniqueIgns);
  const test = await getData(price);
  saveToFile(test);
}

export async function getProdHtmlNode(): Promise<GetProdHtmlNodeResult> {
  let trade = await waitForNode('#trade');
  const result: HTMLElement = document.createElement("div");
  trade.parentElement!.insertBefore(result, trade);
  return {el: result, App: Pathofexile};
}
