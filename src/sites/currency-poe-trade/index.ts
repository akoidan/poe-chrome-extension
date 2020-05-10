import {sleep} from "@/utils/helpers";
import {pageModule} from "@/store/modules/page";

async function getProdHtmlNode() {
  for (let i = 0; i < 50; i++) {
    const holder = document.getElementById('contentstart');
    if (holder) {
      pageModule.setCurrentPage("currency-poe-trade");
      return holder;
    }
    await sleep(100);
  }
  throw Error(`Unable to load poe-trade extension plugin cause
        document.querySelector('#contentstart') didnt find any wrappers`);
}


async function getDevHtmlNode() {
  const content =  await import (/* webpackChunkName: "currency.poe.trade.html" */"@/sites/currency-poe-trade/currency-poe-trade.html");
  document.getElementById('app')!.innerHTML = content.default;
  return getProdHtmlNode();
}


export {getDevHtmlNode, getProdHtmlNode}
