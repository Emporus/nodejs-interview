import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcryptjs";
import { User, IUser } from "../models/user";
import { NativeError } from "mongoose";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user: any, done) => {
    done(undefined, user.email);
});

passport.deserializeUser(function(username: string, done) {
    User.findOne({email: username},
        "-password -__v")
        .populate("customizedETFS")
        .exec((err, user: IUser | null) => done(err, user));
});


/**
 * ToDo: Sign in using Email and Password.
 */
// passport.use(new LocalStrategy());

export default passport;