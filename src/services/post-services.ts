import { PostInstance as post } from "../models/post-model";

const getAll = () => post.findAll(); 

const getById = (id: number) => post.findByPk(id);

const create = (name: string, content: Text) => {
    return post.create({
        author: name, 
        content: content
    });
};

const update = (id: number, author: string, content: any) => {
    return post.update({
        author: author,
        content: content,
    },
    { where: { id: id } },
    );
};

const deleteBlog = (id: number) => post.destroy({ where: { id: id }} );

export default {
    getAll,
    create,
    update,
    deleteBlog,
    getById,
};
