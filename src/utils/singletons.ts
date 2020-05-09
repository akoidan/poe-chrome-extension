import {Logger, LoggerFactory, LogStrict} from "lines-logger";
import {Api} from "@/utils/api";
import {Xhr} from "@/utils/xhr";

const loggerFactory: LoggerFactory = new LoggerFactory(LogStrict.TRACE);

const xhr: Xhr = new Xhr(
  loggerFactory.getLoggerColor("http", "#680061"),
  fetch,
);
const globalLogger: Logger = loggerFactory.getLoggerColor("global", "#007a70");
const api: Api = new Api(xhr, loggerFactory.getLoggerColor("api", "red"));

export {globalLogger, api, loggerFactory, xhr};
