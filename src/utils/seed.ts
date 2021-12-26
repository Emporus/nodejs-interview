import mongoose from "mongoose";
import { User } from "../models/user";
import userExample from "../mock_data/users.json";

const {getDb} = require("./db");

const seedDB = async () => {
    await User.deleteMany({});
    const user_1 = new User(userExample);
    await user_1.save();
};

getDb().then(() => {
        console.log("Connected to db!!!");
        seedDB().then(() => {
            mongoose.connection.close().then(r => {
                console.log("Connection to mongo-db closed!!!");
            });
        });

    })
    .catch((err: any) => {
        console.log(err);
    });