import 'dotenv/config.js'
import '../../config/database.js'
import {Chapter} from '../Chapter.js'

 let chapters = [
    {
        comic_id: "holita",
        title: "capitulo 1",
        pages: [1],
        order: 3
        
    },{
        comic_id: "holita2",
        title: "Dragon Ball",
        pages: [2],
        order: 5
    }
 ]

 Chapter.insertMany(chapters)