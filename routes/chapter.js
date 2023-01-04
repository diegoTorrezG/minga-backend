import controller from '../controllers/chapter.controllers.js'
import schema from '../schemas/chapter.schema.js'
import validator from '../middlewares/validator.js'
const { create } = controller
import express from 'express'
let router = express.Router()

router.post('/',validator(schema), create)

export default router