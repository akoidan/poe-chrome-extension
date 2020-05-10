// Webpack global consts
import {Consts} from "@/types/model";

declare const CONSTS: Consts;

// Unpack webpack define plugin values here from json
const {
  // CVS short revision
  APP_VERSION,
  // Base http url of the backend
  API_URL,
  // True will result a debug build. Loggers would logs all, global scope would have debug variables, etc
  IS_DEBUG,
  // True if `/home` style pages would be used instead of `/#home`
  APP_TARGET,
} = CONSTS;

export const ApiConsts: Consts = {
  API_URL,
  APP_VERSION,
  LOAD_MORE_TIMES: 10, // Amount of times pathofexile.com will scroll to bottom to load more content if igns are duplicates
  LOAD_MORE_WHISPERS: 10, // Amount of lines in resulting file that's enough so pathofexile.com will scroll to bottom to load more content if igns are duplicates NO MORE
  DISPLAY_ALERTS_MS: 30000,
  IS_DEBUG,
  FILE_NAME: "buyItemsList.txt",
  MAX_ERROR_NUMBER: 3,
  APP_TARGET,
};
