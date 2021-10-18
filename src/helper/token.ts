import jwt from "jsonwebtoken";
import config from "../config/config";

const secretKey: any = config.server.token.secret;

const createToken = (id: number, name: string) => {
    const token = jwt.sign(
        { user_id: id, userName: name },
        secretKey,
        { expiresIn: config.server.token.expireTime, issuer: config.server.token.issuer })
    return token;
};

export default {
    createToken,
}
