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
  let escapeMap: { [id: string]: string } = {
    '#': '{#}',
    '+': '{+}',
    '{': '{{}',
    '}': '{}}'
  };
  let replaceHtmlRegex = new RegExp("[" + Object.keys(escapeMap).join("") + "]", "g");
  return html.replace(replaceHtmlRegex, function (s) {
    return escapeMap[s];
  });
}

function saveToFile(data: string) {
  let escaped = escapeHtml(data);
  FileSaver.saveAs(new Blob([escaped], {
    type: "text/plain;charset=utf-8"
  }), 'buyItemsList.txt');
  return true;
}


export function clearBlock(block: string) {
  new Blocker(block).clear();
}

export function showBlockInfo(block: string) {
  return new Blocker(block).getTodayBlockInfo();
}

export function getCurrentPage(): CurrentPage {
  let href = window.location.href;
  const siteMap : {url: string, component: CurrentPage}[] = [
    {
      url: 'pathofexile.com/trade/search',
      component: 'pathofexile'
    },
    {
      url: 'pathofexile.com/trade/exchange',
      component: 'pathofexile-bulk'
    },
    {
      url: 'currency.poe.trade',
      component: 'currency-poe-trade'
    },
    {
      url: 'poe.trade',
      component: 'poe-trade'
    }
  ];
  let find = siteMap.find(a => window.location.href.indexOf(a.url) >= 0);
  let res: CurrentPage|null;
  if (!find) {
    res = prompt(`Is this ${siteMap.map(a=> a.component).join('/')}?`, siteMap[0]!.component as string) as CurrentPage;
    if (!siteMap.find(e => e.component === res)) {
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


export {sleep, getUniqueId, escapeHtml, saveToFile, Blocker};
