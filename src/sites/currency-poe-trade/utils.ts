import {calcOffer, saveToFile} from "@/utils/helpers";
import {OfferDetails} from "@/types/model";

function getCurrencyText() {
  const regex = /CURRENCY_TEXTS = (\[.*\])/g;
  const res = regex.exec(document.body.innerHTML);
  if (res?.[1]) {
    return JSON.parse(res[1]);
  }
  alert("can't evaluate CURRENCY_TEXTS var ");
  throw "Invalid state exception";
}


export function saveCurrencyData(amount: number, limit: number) {
  const data = parseCurrencyPage(amount, limit);
  saveToFile(data);
}

function createOffer(o: HTMLElement): OfferDetails {
  const CURRENCY_TEXTS = getCurrencyText();
  return {
    username: o.getAttribute("data-username")!,
    sellcurrency: CURRENCY_TEXTS[parseInt(o.getAttribute("data-sellcurrency")!)!],
    buycurrency: CURRENCY_TEXTS[parseInt(o.getAttribute("data-buycurrency")!)!],
    sellvalue: parseFloat(o.getAttribute("data-sellvalue")!)!,
    buyvalue: parseFloat(o.getAttribute("data-buyvalue")!),
    ign: o.getAttribute("data-ign")!,
    stock: parseInt(o.getAttribute("data-stock")!),
    league: findGetParameter("league")!,
  };
}


function parseCurrencyPage(amount: number, limit: number) {
  const els = document.querySelectorAll(".displayoffer");
  let outstr = "";
  Array.prototype.forEach.call(els, (e) => {
    const offer = createOffer(e);
    outstr += calcOffer(limit, amount, offer);
  });
  return outstr;
}


function findGetParameter(parameterName: string) {
  let result = null,
    tmp = [];
  const items = location.search.substr(1).split("&");
  for (let index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) {
      result = decodeURIComponent(tmp[1]);
    }
  }
  return result;
}

