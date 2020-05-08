import FileSaver from 'file-saver'
import PoeItem from "@/utils/poe-item";

import notable from '@/utils/cluster-jewels/notable.json';
import minor from '@/utils/cluster-jewels/minor.json';
import keystones from '@/utils/cluster-jewels/keystones.json';
import {saveToFile} from "@/utils/helpers";

var clusterJewels: { [id: string]: string } = Object.assign({}, notable, minor, keystones);

function getDefaultOffer(userText: string) {
  return function (element: HTMLElement) {
    return whisperMessage(element) + ' ' + userText;
  }
}

function whisperMessage(o: HTMLElement) {
  let getData = (function () {
    let item: HTMLElement = o.closest(".item") as HTMLElement;
    return function (attr: string): string | null {
      return item.getAttribute('data-' + attr);
    }
  })();
  let bo = getData("buyout") ? " listed for " + getData("buyout") : "";
  let prefix = "";
  if (getData("level"))
    prefix += "level " + getData("level") + " ";
  if (getData("quality"))
    prefix += getData("quality") + "% ";
  let message = "@" + getData("ign") + " Hi, I would like to buy your " + prefix + getData("name") + bo + " in " + getData("league");
  let tab = getData("tab");
  if (tab) {
    let x = parseInt(getData("x")!)
        , y = parseInt(getData("y")!);
    message += ' (stash tab "' + tab + '"';
    if (x >= 0 && y >= 0)
      message += "; position: left " + (x + 1) + ", top " + (y + 1);
    message += ')';
  }
  return message;
}

function getCalcOffer(paramNames: string[], paramMap: { [id: string]: string }) {
  return function (element: HTMLElement) {
    let summ = 0;
    paramNames.forEach((p) => {
      let v: string = getAttr(element, p)!;
      if (isNaN(v as unknown as number)) {
        console.warn(element, v + " is nan");
      } else {
        summ += parseInt(v);
      }
    });
    if (paramMap[summ]) {
      return getDefaultOffer('My offer is ' + paramMap[summ])(element);
    } else {
      console.warn(element, 'Sum "' + summ + '"  missmatch');
      return '';
    }
  }
}


export function saveCurrentData(block: string, offer: string) {
  let offerStr = getDefaultOffer(offer);
  // offer = getCalcOffer(request.attributes.paramNames, request.attributes.paramMap);
  let result = parsePage(block, offerStr);
  saveToFile(result);
}



export function clearBlock(block: string) {
  new Blocker(block).clear();
}

export function showBlockInfo(block: string) {
  return new Blocker(block).getTodayBlockInfo();
}


function appendAccount() {
  [].forEach.call(document.querySelectorAll('[data-seller]'), (e: HTMLElement) => e.querySelector('h5')!.innerHTML += e.getAttribute('data-seller'))
}

export function getMods() {
  let modDivs = document.querySelectorAll('.mods [data-name]');
  let modNames : string[]= [].map.call(modDivs, (a: HTMLElement) => a.getAttribute('data-name')) as string[];
  let excludeMods = (item: string) => item.indexOf('#(enchant)') < 0;
  return modNames.filter((item, pos) => modNames.indexOf(item) === pos && excludeMods(item));
}


function copyTextToClipboard(text: string) {
  let textArea = document.createElement("textarea");
  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = '0';
  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
  return success;
}


function poeClip() {
  [].forEach.call(document.querySelectorAll('*[id^="item-container-"]'), (e: HTMLElement) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.appendChild(a);
    e.querySelector('.requirements .proplist')!.appendChild(li);
    var clusterMods = e.querySelectorAll('li[data-name*="Added Passive Skill is"]');
    clusterMods.forEach(clusterModeRaw => {
      let clusterMode: HTMLElement = clusterModeRaw as HTMLElement;
      let match = /#\w Added Passive Skill is (.*)/.exec(clusterMode.getAttribute('data-name')!);
      if (match && clusterJewels[match[1]]) {
        clusterMode.title = clusterJewels[match[1]];
      }
    })
    a.innerText = 'Copy';
    a.onclick = () => {
      let poeObject = new PoeItem(e);
      let succ = copyTextToClipboard(poeObject.buildItem());
      a.innerText = succ ? 'Copied' : 'Error';
    };
  });
}


export function init() {
  appendAccount();
  poeClip();
}

function getAttr(element: HTMLElement, atr: string) {
  return element.closest(".item")!.querySelector(`[data-name="${atr}"]`)!.getAttribute('data-value');
}

class Blocker {

  lsPerma: string;
  lsToday: string;

  constructor(blockName: string) {
    this.lsPerma = blockName;
    this.lsToday = blockName + 't';
  }

  getLocalStorage(key: string): string[] {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }

  setLocalStorage(key: string, value: string[]) {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getTodayBlockInfo() {
    return localStorage.getItem(this.lsToday);
  }

  clear() {
    localStorage.removeItem(this.lsPerma);
    localStorage.removeItem(this.lsToday);
  }

  blockPerson(name: string) {
    let list = this.getLocalStorage(this.lsPerma);
    list.push(name);
    this.setLocalStorage(this.lsPerma, list);
  };

  blockToday(name: string) {
    let list = this.getLocalStorage(this.lsToday);
    list.push(name);
    this.setLocalStorage(this.lsToday, list);
  };

  getPermaBlock() {
    return this.getLocalStorage(this.lsPerma);
  };

  getTodayBlock() {
    return this.getLocalStorage(this.lsToday);
  };

  isAvailable(name: string) {
    return this.getPermaBlock().indexOf(name) < 0 && this.getTodayBlock().indexOf(name) < 0;
  };
}




function parsePage(blockName: string, getOffer: Function) {
  let ls: Blocker;
  if (blockName) {
    ls = new Blocker(blockName);
  }
  let outStr = "";
  let getParent = function (el: HTMLElement) {
    return el.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.parentElement;
  };
  let uniqueIgn: { [id: string]: string } = {};
  let ign = document.querySelectorAll('.whisper-btn');
  [].forEach.call(ign, function (btn) {
    let el = getParent(btn);
    let name: string = el!.getAttribute('data-ign')!;
    if (blockName) {
      if (ls.isAvailable(name)) {
        ls.blockToday(name);
        uniqueIgn[name] = btn;
      }
    } else {
      uniqueIgn[name] = btn;
    }
  });
  for (let name in uniqueIgn) {
    if (!uniqueIgn.hasOwnProperty(name))
      continue;
    let offer = getOffer(uniqueIgn[name]);
    if (offer) {
      outStr += offer + '\n';
    }
  }
  return outStr;
}
