import services from "../services/post-services";
import { Request, Response } from "express";
import message from "../constants/message";

const getPosts = async(_req: Request, res: Response) => {
    try {
        const result = await services.getAll();
        res.send(result);
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

const getById = async(req: Request, res: Response) => {
    try {
        const result = await services.getById(+req.params.id);
        if (result === null) throw new Error(message.notFound);
        res.json({ 
            message: `Hey ${result.getDataValue("author")} here is your blog.`,
            Blog: result,
        });
    } catch(err) {
        res.json({ message: `${err}`});
    }
}; 

const createPost = async(req: Request, res: Response) => {
    try {
        const { name, content } = (req.body as { name: string, content: Text });
        const result = await services.create(name, content);
        res.json({ message: message.createPost, newBlog: result });
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

const updatePost = async(req: Request, res: Response) => {
    try {
        const { name, content } = (req.body as { name: string, content: Text });
        const check = await services.getById(+req.params.id);
        if (check === null) throw new Error(message.notFound);
        const result = await services.update(+req.params.id, name, content);
        res.json({ message: message.updatePost, updated: await services.getById(+req.params.id) })
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

const deletePost = async(req: Request, res: Response) => {
    try {
        await services.deleteBlog(+req.params.id);
        res.json({ message: `message.deletePost` });
    }
    catch(err) {
        res.json({ message: `${err}`});
    }
};

export default {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getById,
};
