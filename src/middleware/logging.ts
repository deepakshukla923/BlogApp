import { RequestHandler } from "express";

const logger: RequestHandler = (req, res, next) => {
    const currrentTime = new Date();
    let formatted_date =
    currrentTime.getFullYear() +
    "-" +
    (currrentTime.getMonth() + 1) +
    "-" +
    currrentTime.getDate() +
    " " +
    currrentTime.getHours() +
    ":" +
    currrentTime.getMinutes() +
    ":" +
    currrentTime.getSeconds();
    const method = req.method;
    const url = req.url;
    const status = req.statusCode;
    const start = process.hrtime();
}
