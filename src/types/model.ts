type AlertType = "success" | "info" | "error";

interface AlertModel {
  id: number;
  text: string;
  type: AlertType;
}

interface Consts {
  IS_DEBUG: boolean;
  APP_VERSION?: string;
  API_URL: string;
  FILE_NAME: string;
  DISPLAY_ALERTS_MS: number;
  MAX_ERROR_NUMBER: number;
  APP_TARGET: "pathofexile.com" | "poe.trade" | null;
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
  RequestOptions,
};
