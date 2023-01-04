import {Comic} from '../models/comic.models.js'
import defaultResponse from '../config/response.js'

let comicControl ={
    create: async(req, res)=> {
        try {
            const {author_id, company_id, title, photo, description, category } = req.body
            await Comic.create({author_id, company_id, title, photo, description, category})
            req.body.success = true
            req.body.sc = 201
            req.body.data = 'Comic created'
            return defaultResponse(req,res)
        }catch(error){
            console.log(error);
        }
    }
}

export default comicControl
