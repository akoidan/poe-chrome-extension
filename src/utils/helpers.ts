import FileSaver from "file-saver";
import {CurrentPage} from "@/types/model";

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

export function getCurrentPage(): CurrentPage {
  const {href} = window.location;
  const siteMap: {url: string; component: CurrentPage}[] = [
    {
      url: "pathofexile.com/trade/search",
      component: "pathofexile",
    },
    {
      url: "pathofexile.com/trade/exchange",
      component: "pathofexile-bulk",
    },
    {
      url: "currency.poe.trade",
      component: "currency-poe-trade",
    },
    {
      url: "poe.trade",
      component: "poe-trade",
    },
  ];
  const find = siteMap.find((a) => window.location.href.includes(a.url));
  let res: CurrentPage|null;
  if (!find) {
    res = prompt(`Is this ${siteMap.map((a) => a.component).join("/")}?`, siteMap[0]!.component as string) as CurrentPage;
    if (!siteMap.find((e) => e.component === res)) {
      throw Error("Cannot detecte site");
    }
  } else {
    res = find.component;
  }
  return res!;
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
