import {LogStrict, Logger, LoggerFactory} from "lines-logger";

const loggerFactory: LoggerFactory = new LoggerFactory(LogStrict.TRACE);

const globalLogger: Logger = loggerFactory.getLoggerColor("global", "#007a70");

export {globalLogger, loggerFactory};
