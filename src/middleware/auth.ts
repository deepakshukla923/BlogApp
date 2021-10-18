import { RequestHandler } from "express";
import config from "../config/config";
import jwt from "jsonwebtoken";
import message from "../constants/message";

export const auth: RequestHandler = (req, _res, next) => {
    try {
        const secret: any = config.server.token.secret;
        const token = 
            req.body.token || 
            req.header('auth-token') || 
            req.headers.authorization?.split(' ')[1];
        if (!token) throw new Error(message.denied);
        jwt.verify(token, secret);
        next();
    } catch(err) {
        next(`${err}`);
    }
}; 
