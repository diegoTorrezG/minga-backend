import mongoose from 'mongoose'

const comicSchema = Joi.object({
    author_id: {type: mongoose.Types.ObjectId, require: true},
    company_id: {type: mongoose.Types.ObjectId, require: true},
    title: {type: string,required: true},
    photo: {type: string,required: true},
    description: {type: string,required: true},
    category: {type: mongoose.Types.ObjectId, require: true}
},{
    timestamps: true
}
)

export const Comic = mongoose.model('categories', comicSchema)