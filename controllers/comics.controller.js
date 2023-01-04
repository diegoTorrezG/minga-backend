import {Comic} from '../models/comic.models.js'

let comicControl ={
    create: async(req, res)=> {
        try {
            const {author_id, company_id, title, photo, description, category } = req.body
            await Comic.create({author_id, company_id, title, photo, description, category})
            req.status(201).json({
                success: true,
                response: "Logrado",
            })
        }catch(error){
            console.log(error);
        }
    }
}

export default comicControl
