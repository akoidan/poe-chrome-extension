import {sleep} from "@/utils/helpers";
import {pageModule} from "@/store/modules/page";
import {init} from "@/main";
import Pathofexile from "@/sites/pathofexile/Pathofexile.vue";
import ls from "@/sites/pathofexile/localstorage.json";

async function getProdHtmlNode() {
  for (let i = 0; i < 50; i++) {
    const holder = document.getElementById("trade");
    if (holder) {
      const result = document.createElement("div");
      holder.parentElement!.insertBefore(result, holder);
      pageModule.setCurrentPage("pathofexile");
      return result;
    }
    await sleep(200);
  }
  throw Error(`Unable to load poe-trade extension plugin cause
        document.querySelector('#contentstart') didnt find any wrappers`);
}


(async function() {
  for (const k in ls) {
    const l: string = (ls as {[id: string]: string})[k];
    localStorage.setItem(k, l);
  }
  const node: HTMLElement = await getProdHtmlNode();
  await init(node, Pathofexile);
}());

