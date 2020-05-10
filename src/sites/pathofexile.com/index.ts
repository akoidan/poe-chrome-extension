import {init} from "@/utils/appCreator";
import ls from "@/sites/pathofexile.com/localstorage.json";
import {getProdHtmlNode} from "@/sites/pathofexile.com/utils";
import {GetProdHtmlNodeResult} from "@/types/model";


(async function() {
  for (const k in ls) {
    const l: string = (ls as {[id: string]: string})[k];
    localStorage.setItem(k, l);
  }
  const {el, App}: GetProdHtmlNodeResult = await getProdHtmlNode();
  await init(el, App);
}());

