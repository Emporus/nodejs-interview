import mongoose from "mongoose";
import { DB_URI } from "../configs/config";
import logger from "../core/logger/Logger";

export const getDb = async () => {
    const connection = await mongoose.connect(DB_URI);
    logger.debug("local db connected");
    return connection;
};