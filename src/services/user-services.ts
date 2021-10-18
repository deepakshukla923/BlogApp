import { User } from "../models/user-model";
import Token from "../helper/token";

export const register = (full_name: string, email: string, password: string) => {
    return User.create({ 
            full_name: full_name,
            email: email,
            password: password,
        });
}; 

export const login = (user: any) => Token.createToken(user.getDataValue("id"), user.getDataValue("full_name"));
