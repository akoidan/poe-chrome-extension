import {saveToFile} from "@/utils/helpers";

function getCurrencyText() {
  const regex = /CURRENCY_TEXTS = (\[.*\])/g;
  let res = regex.exec(document.body.innerHTML);
  if (res && res[1]) {
    return JSON.parse(res[1]);
  } else {
    alert("can't evaluate CURRENCY_TEXTS var ");
    throw "Invalid state exception";
  }
}


export function saveCurrencyData(amount: number, limit: number) {
  let data = parseCurrencyPage(amount, limit);
  saveToFile(data);
}

function createOffer(o: HTMLElement) {
  return {
    "username": o.getAttribute("data-username"),
    "sellcurrency": parseInt(o.getAttribute("data-sellcurrency")!),
    "buycurrency": parseInt(o.getAttribute("data-buycurrency")!),
    "sellvalue": parseFloat(o.getAttribute("data-sellvalue")!),
    "buyvalue": parseFloat(o.getAttribute("data-buyvalue")!),
    "ign": o.getAttribute("data-ign"),
    "stock": o.getAttribute("data-stock"),
  };
}

function parseCurrencyPage(amount: number, limit: number) {
  let els = document.querySelectorAll('.displayoffer');
  let outstr = '';
  let CURRENCY_TEXTS = getCurrencyText();
  Array.prototype.forEach.call(els, e => {
        let offer = createOffer(e);
        let price = offer.buyvalue / offer.sellvalue;
        if (limit) {
          if (price > 1 && price > limit) {
            return;
          } else if (price < 1 && 1 / price < limit) {
            return
          }
        }

        let buying;
        let selling;
        let end = '';
        let currencyName = CURRENCY_TEXTS[offer.sellcurrency];
        let currencyNameSell = CURRENCY_TEXTS[offer.buycurrency];
        if (price > 1) {
          if (amount && offer.sellvalue > amount) {
            selling = price * amount;
            buying = amount;
          } else {
            buying = offer.sellvalue;
            selling = offer.buyvalue;
          }
          if (amount && offer.sellvalue < amount) {
            end = ` I need ${amount} ${currencyName}.`
          }
        } else {
          if (amount && offer.buyvalue > amount) {
            selling = amount;
            buying = amount / price;
          } else {
            buying = offer.sellvalue;
            selling = offer.buyvalue;
          }
          if (amount && offer.buyvalue < amount) {
            end = ` I need ${amount} ${currencyNameSell} worth.`
          }
        }
        outstr += `@${offer.ign} Hi, I'd like to buy your ${Math.floor(buying)} ${currencyName} for my ${Math.floor(selling)} ${currencyNameSell} in ${findGetParameter('league')}.${end}\n`;
      }
  );
  return outstr;
}


function findGetParameter(parameterName: string) {
  var result = null,
      tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}

