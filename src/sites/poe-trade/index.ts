import {sleep} from "@/utils/helpers";
import {pageModule} from "@/store/modules/page";
import {init} from "@/main";
import PoeTrade from "@/sites/poe-trade/PoeTrade.vue";

async function getProdHtmlNode() {
  for (let i = 0; i < 50; i++) {
    const holder = document.getElementById("contentstart");
    if (holder) {
      pageModule.setCurrentPage("poe-trade");
      return holder;
    }
    await sleep(100);
  }
  throw Error(`Unable to load poe-trade extension plugin cause
        document.querySelector('#contentstart') didnt find any wrappers`);
}

(async function() {
  const node: HTMLElement = await getProdHtmlNode();
  await init(node, PoeTrade);
}());
