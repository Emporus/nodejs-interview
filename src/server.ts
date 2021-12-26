import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import session from "express-session";
import passportConf from "./configs/passport";
import { getDb } from "./utils/db";
import logger from "./core/logger/Logger";

// bring in routes
import keepAliveRoutes from "./routes/keepAlive.router";
import { APP_PORT } from "./configs/config";

const app: express.Application = express();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Long string value for the hashing algo
// The use of sessions will create a cookie which will hold the identifier key to the server to receive the session values.
app.use(session({
    secret: "a1d82de1bb0fb656d89725d81353758bc0dbbe2909615db474019d5000c2207d",
    resave: false,
    saveUninitialized: false,
}));

app.use(passportConf.initialize());
app.use(passportConf.session());


// here we can also filter by topic. for example: "/post" and then all the specified routes in postRoutes don't have to start with /post in their definition
app.use("/keepalive", keepAliveRoutes);

const port = APP_PORT || 8080;

// db connection
getDb().then(() => {
        logger.debug("Connected to db!!!");
        app.listen(port, () => {
            logger.info(`A node js is listening on port: ${port} on env: ${app.get("env")}`);
        });
})
.catch(err => {
    logger.error(err);
});

