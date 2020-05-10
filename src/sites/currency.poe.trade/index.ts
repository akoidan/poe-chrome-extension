import {init} from "@/utils/appCreator";
import {getProdHtmlNode} from "@/sites/currency.poe.trade/utils";
import {GetProdHtmlNodeResult} from "@/types/model";


(async function() {
  const {el, App}: GetProdHtmlNodeResult = await getProdHtmlNode();
  await init(el, App);
}());
