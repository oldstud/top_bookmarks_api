const Joi = require('joi');
const { HttpCode } = require('../helpers/constants.js')

const schemaCreate = Joi.object({
    comment: Joi.string()
        .min(3)
        .max(150)
        .required(),
    projectId: Joi.string()
        .min(3)
        .max(100)
        .required(),
    authorId: Joi.string()
    .min(3)
    .max(100)
    .required(),
    authorName: Joi.string()
    .min(3)
    .max(100)
    .required(),
    authorEmail: Joi.string().optional(),
    authorAvatar: Joi.string().optional(),   
})


const validate = (schema, body, next) => {
    const { error } = schema.validate(body)
    if (error) {
        const [{ message }] = error.details
        return next({
            status: HttpCode.BAD_REQUEST,
            message: `Filed:${message.replace(/"/g, '')}`,//reqexp  
            data: 'Bad Request!'
        })
    }
    next()
}

module.exports.validateCreateComment = (req, res, next) => {
    return validate(schemaCreate, req.body, next)
}



