import Joi from 'joi-oid'

const schema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  last_name: Joi.string().min(3).max(15),
  city: Joi.string().min(3).max(15).required(),
  country: Joi.string().min(3).max(10).required(),
  date: Joi.date().required(),
  photo: Joi.string().required(),
  user_id: Joi.objectId().required()
})

export default schema