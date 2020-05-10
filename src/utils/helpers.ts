import FileSaver from "file-saver";
import {CurrentPage, OfferDetails} from "@/types/model";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve: () => void) => setTimeout(resolve, ms));
}

const getUniqueId = ((): () => number => {
  let id = 1;
  return (): number => id++;
})();


function escapeHtml(html: string) {
  const escapeMap: { [id: string]: string } = {
    "#": "{#}",
    "+": "{+}",
    "{": "{{}",
    "}": "{}}",
  };
  const replaceHtmlRegex = new RegExp(`[${Object.keys(escapeMap).join("")}]`, "g");
  return html.replace(replaceHtmlRegex, (s) => escapeMap[s]);
}

function saveToFile(data: string) {
  const escaped = escapeHtml(data);
  FileSaver.saveAs(new Blob([escaped], {
    type: "text/plain;charset=utf-8",
  }), "buyItemsList.txt");
  return true;
}


export function clearBlock(block: string) {
  new Blocker(block).clear();
}

export function showBlockInfo(block: string) {
  return new Blocker(block).getTodayBlockInfo();
}


export function calcOffer(limit: number, amount: number, offer: OfferDetails) {
  const price = offer.buyvalue / offer.sellvalue;
  if (limit) {
    if (price > 1 && price > limit) {
      return;
    } else if (price < 1 && 1 / price < limit) {
      return;
    }
  }

  let buying;
  let selling;
  let end = "";

  if (price > 1) {
    if (amount && offer.sellvalue > amount) {
      selling = price * amount;
      buying = amount;
    } else {
      buying = offer.sellvalue;
      selling = offer.buyvalue;
    }
    if (amount && offer.sellvalue < amount) {
      end = ` I need ${amount} ${offer.sellcurrency}.`;
    }
  } else {
    if (amount && offer.buyvalue > amount) {
      selling = amount;
      buying = amount / price;
    } else {
      buying = offer.sellvalue;
      selling = offer.buyvalue;
    }
    if (amount && offer.buyvalue < amount) {
      end = ` I need ${amount} ${offer.buycurrency} worth.`;
    }
  }
  return `@${offer.username} Hi, I'd like to buy your ${Math.floor(buying)} ${offer.sellcurrency} for my ${Math.floor(selling)} ${offer.buycurrency} in ${offer.league}.${end}\n`;
}

export async function waitForNode(selector:string) {
  for (let i = 0; i < 50; i++) {
    const holder = document.querySelector(selector);
    if (holder) {
      return holder;
    }
    await sleep(200);
  }
  throw Error(`Unable to load poe-trade extension plugin cause
      document.querySelector('${selector}') didnt find any wrappers`);
}


class Blocker {
  lsPerma: string;

  lsToday: string;

  constructor(blockName: string) {
    this.lsPerma = blockName;
    this.lsToday = `${blockName}t`;
  }

  getLocalStorage(key: string): string[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }

  setLocalStorage(key: string, value: string[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getTodayBlockInfo() {
    return localStorage.getItem(this.lsToday);
  }

  clear() {
    localStorage.removeItem(this.lsPerma);
    localStorage.removeItem(this.lsToday);
  }

  blockPerson(name: string) {
    const list = this.getLocalStorage(this.lsPerma);
    list.push(name);
    this.setLocalStorage(this.lsPerma, list);
  }

  blockToday(name: string) {
    const list = this.getLocalStorage(this.lsToday);
    list.push(name);
    this.setLocalStorage(this.lsToday, list);
  }

  getPermaBlock() {
    return this.getLocalStorage(this.lsPerma);
  }

  getTodayBlock() {
    return this.getLocalStorage(this.lsToday);
  }

  isAvailable(name: string) {
    return !this.getPermaBlock().includes(name) && !this.getTodayBlock().includes(name);
  }
}


export {sleep, getUniqueId, escapeHtml, saveToFile, Blocker};
