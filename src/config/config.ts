import { Dialect } from "sequelize/types";
import dotenv from "dotenv";
dotenv.config();

const name = process.env.DB_NAME as string;
const user = process.env.DB_USER as string;
const host = process.env.DB_HOST || "localhost";
const password = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT as Dialect;

const MYSQL = {
    user,
    password,
    name,
    host,
    dialect,
};

const port = process.env.DB_PORT || 3000;
const expireTime = process.env.JWT_EXPIRETIME || 3600;
const secret = process.env.JWT_TOKEN;
const issuer = process.env.JWT_ISSUER;
const serverHost = process.env.SERVER_HOST;

const SERVER = {
    host: serverHost,
    port,
    token: {
        secret,
        expireTime,
        issuer,
    },
};

export default {
    db: MYSQL,
    server: SERVER,
}
