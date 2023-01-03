import 'dotenv/config.js'
import '../../config/database.js'
import { Chapter } from '../Category.js'

let categories = [
    {
        name: "shojo",
        ranking: 5,
        examples: ["Nana","Fruits Basket"],
        detail: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        user_id: "63ac47d8b4db2f7baacad498"
    },{
        name: "seinen",
        ranking: 6,
        examples: ["Shuumatsu no Valkyrie","One Punch Man"],
        detail: "Japanese seinen tells stories with a mature tone.",
        user_id: "63ac47d8b4db2f7baacad498"
    }
]

Category.insertMany(categories)