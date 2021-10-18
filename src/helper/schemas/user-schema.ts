import Joi from "joi";

// Register Validation
const registerSchema = (data: object) => {
    const schema = Joi.object().keys({
        full_name: Joi.string()
            .min(1)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .max(16)
            .required(),                
    });
    return schema.validateAsync(data);
}

// LogIn validation
const logInSchema = (data: any) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .min(8)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .max(16)
            .required(),
    });
    return schema.validateAsync(data);
}

export default {
    registerSchema,
    logInSchema,
};
