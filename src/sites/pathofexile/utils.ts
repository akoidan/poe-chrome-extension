import {saveToFile, sleep} from "@/utils/helpers";
import {globalLogger} from "@/utils/singletons";
import {ApiConsts} from "@/utils/consts";
import {Api} from "@/utils/api";


export async function getData(offer: string):Promise<string> {

  let rows = Array.from(document.querySelectorAll('.resultset > [data-id]'));
  let existingIgs: {[ign: string]: boolean} = {};
  const whisperButtons: HTMLInputElement[] = rows.filter(a => {
    let ign = a.querySelector('.profile-link')!.textContent!;
    let res = !existingIgs[ign];
    existingIgs[ign] = true;
    return res;
  }).map(
    a => a.querySelector('.whisper-btn')
  ) as unknown as HTMLInputElement[];
  let fileContent = "";
  const initialText = await navigator.clipboard.readText();
  globalLogger.log("Found {} entries", whisperButtons.length)();
  for (let btnI = 0; btnI < whisperButtons.length; btnI++) {
    whisperButtons[btnI].click();
    let text = await navigator.clipboard.readText();
    if (text === initialText && initialText.indexOf("I want to") < 0) {
      throw Error("Copy functionality is broken");
    }
    fileContent += `${text} ${offer}\n`;
  }
  return fileContent;
}



async function loadMore(): Promise<boolean> {
  globalLogger.log("loading more entries")();
  let prevScrollHeight = document.body.scrollHeight;
  let j = 50;
  do {
    window.scrollTo(0, document.body.scrollHeight);
    (document.querySelector('.load-more-btn') as HTMLInputElement)?.click();
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
    let pl = Array.from(document.querySelectorAll('.profile-link'));
    let uniqueIgns = new Set(pl.map(a => a.textContent));
    if (uniqueIgns.size > ApiConsts.LOAD_MORE_WHISPERS) {
      globalLogger.log("reached 15 entries, exiting")()
      break
    }
    i--;
    let loaded = await loadMore();
    if (!loaded) {;
      globalLogger.log("Nothing loaded from last request, breaking from loop")();
      break
    }
  } while (i > 0)
}

export async function saveCurrentData(price:string) {
  await loadUntilEnough();
  let test = await getData(price);
  saveToFile(test);
}
