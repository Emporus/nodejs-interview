import dotenv from "dotenv";
dotenv.config();

export const ENVIRONMENT = process.env.ENVIRONMENT || "local";
export const IS_PRODUCTION = ENVIRONMENT !== "local";
export const APP_PORT = Number(process.env.APP_PORT) || 8080;
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || "/";

export const DB_URI = process.env.DB_URI || "mongodb://user:12345678@mongodb-local:27017/market_analysis";
export const DEBUG_LEVEL = "debug";
export const TODAY: Date = new Date();
export const LAST_UPDATE_DATE: Date = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1);