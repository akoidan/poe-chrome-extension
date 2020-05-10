import {init} from "@/utils/appCreator";
import {getProdHtmlNode} from "@/sites/poe.trade/utils";
import {GetProdHtmlNodeResult} from "@/types/model";


(async function() {
  const {App, el}: GetProdHtmlNodeResult = await getProdHtmlNode();
  await init(el, App);
}());
