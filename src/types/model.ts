type AlertType = "success" | "info" | "error";

interface AlertModel {
  id: number;
  text: string;
  type: AlertType;
}

type CurrentPage = "poe-trade" | "currency-poe-trade" | "pathofexile" | "pathofexile-bulk" | null;

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

export {
  AlertModel,
  AlertType,
  Consts,
  CurrentPage,
  RequestOptions,
};
