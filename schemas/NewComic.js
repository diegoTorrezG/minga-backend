import Joi from 'joi-oid'

const schema = Joi.object({
    author_id: Joi.id().required(),
    company_id: Joi.id(),
    title: Joi.string().required(),
    photo: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.id().required()
})

export default schema