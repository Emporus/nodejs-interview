import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    companyName: string;
    password: string;
    watchedStocks: [string];
}

const userSchema = new Schema<IUser>({
    email: String,
    firstName: String,
    lastName: String,
    companyName: String,
    password: String,
    watchedStocks: [String]
}, {
    timestamps: true
});


export const User = model("User", userSchema, "users");
