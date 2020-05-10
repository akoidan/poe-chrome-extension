import {CurrentPage, GetProdHtmlNodeResult} from "@/types/model";
import {init} from "@/utils/appCreator";


(async () => {
  let hostname = window.location.hostname;
  if(hostname.indexOf('www.') === 0){
    hostname = hostname.replace('www.','');
  }
  const currentPage: CurrentPage = hostname as CurrentPage;
  const {getProdHtmlNode} = await import(/* webpackMode: "eager" */ `@/sites/${currentPage}/utils`);
  if (!getProdHtmlNode) {
    throw Error(`Host ${hostname} is not supported`);
  }
  const {el, App}: GetProdHtmlNodeResult = await getProdHtmlNode();
  await init(el, App);
})();
