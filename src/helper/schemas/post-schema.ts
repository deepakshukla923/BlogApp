import Joi from "joi";

const postSchema = (posts: object) => {
    const schema = Joi.object().keys({   
        name: Joi.string()
            .min(2)
            .required(),
        content: Joi.string()
            .min(5)
            .required()
    });
    return schema.validateAsync(posts);
};

const updateSchema = (posts: object) => {
    const schema = Joi.object().keys({
        id: Joi.number()
            .integer()
            .min(1)
            .required(),
        name: Joi.string()
            .min(2)
            .required(),
        content: Joi.string()
            .min(5)
            .required(),
    });
    return schema.validateAsync(posts);
};

const deleteSchema = (id: number) => {
    const schema = Joi.number()
        .integer()
        .min(1)
        .required();
    return schema.validateAsync(id);
};

export default {
    postSchema,
    updateSchema,
    deleteSchema,
}
