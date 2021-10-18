import { Request, Response } from "express";
import { register, login } from "../services/user-services";
import bcrypt from "bcryptjs";
import { User } from "../models/user-model";
import message from "../constants/message";

export default class UserController { 

    async register(req: Request, res: Response) {  
        try {
            const { full_name, email, password } = req.body;
            const encryptedPassword = await bcrypt.hash(password, 12);
            await register(full_name, email, encryptedPassword);
            res.send(`Hi ${req.body.full_name} you are successfully registerd...😊`);
        } catch(e) {
            res.send(`${e}`);
        }
    } 
    
    async logIn(req: Request, res: Response) {  
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email: email }});
            if (!user) throw new Error(message.wrong);        
            const validPass = await bcrypt.compare(password, user.getDataValue("password"));
            if (!validPass) throw new Error(message.invalid);        
            const token = login(user);
            res.header('auth-token', token).send(message.welcome);
        } catch(e) {
            res.send(`${e}`);
        }
    }
}
