import controller from "../controllers/comics.controller.js"
import schema from '../schemas/NewComic.js'
import validator from '../middlewares/validator.js'
const { create } = controller
import express from "express"
let router = express.Router()

router.post('/',validator(schema), create)

export default router