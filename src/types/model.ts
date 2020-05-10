type AlertType = "success" | "info" | "error";

interface AlertModel {
  id: number;
  text: string;
  type: AlertType;
}


interface OfferDetails {
  username: string;
  sellcurrency: string;
  buycurrency: string;
  sellvalue: number;
  buyvalue: number;
  stock: number;
  league: string;
}

type CurrentPage = "poe.trade" | "currency.poe.trade" | "pathofexile.com";

interface Consts {
  IS_DEBUG: boolean;
  APP_VERSION?: string;
  API_URL: string;
  FILE_NAME: string;
  LOAD_MORE_TIMES: number;
  LOAD_MORE_WHISPERS: number;
  DISPLAY_ALERTS_MS: number;
  MAX_ERROR_NUMBER: number;
  APP_TARGET: CurrentPage;
}
interface RequestOptions<T> {
  url: string;
  method: "GET" | "POST";
  body?: T|null;
  authToken?: string|null;
  parseResponseAsJson?: boolean;
}

interface GetProdHtmlNodeResult {
  el: HTMLElement;
  App: new()=> Vue;
}
export {
  AlertModel,
  AlertType,
  Consts,
  GetProdHtmlNodeResult,
  OfferDetails,
  CurrentPage,
  RequestOptions,
};
