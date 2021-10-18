import schema from "../helper/schemas/user-schema";
import { RequestHandler } from "express";
import { User } from "../models/user-model";
import message from "../constants/message";

// put an underscore for unused parameters like res in these cases.

const registerValidation: RequestHandler = async(req, _res, next) => {
    try {
        const {error} = await schema.registerSchema(req.body);
        if (error) throw new Error(error.details[0].message);
        const oldUser = await User.findOne({ where: { email: req.body.email } });
        if (oldUser) throw new Error(message.login);
        next();
    } catch(e) {
        next(`${e}`);
    }
};

const logInValidation: RequestHandler = async(req, _res, next) => {
    try {
        const {error} = await schema.logInSchema(req.body);
        if (error) throw new Error(error.details[0].message);    
        next();
    } catch(e) {
        next(`${e}`);
    }
};

export default {
    registerValidation,
    logInValidation,
};
