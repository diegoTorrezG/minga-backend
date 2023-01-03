import moongose from 'mongoose'

const chapterSchema = new moongose.schema({
    comic_id:{type: ObjectId, required:true},
    title:{type:String,required:true},
    pages: {type:Array,required:true},
    order: {type:Number}
    
}, {timestamps: true})

export const chapter = moongose.model('chapter',chapterSchema)