
const controller = {
    create: async(req, res)=>{
        try{
            const {comic_id,title, pages,order,time_stamps} = req.body
            await chapter1.create({comic_id,title, pages,order,time_stamps})
            res.status(201).json({
                success:true,
                response:"Nuevo capitulo creado"
            })
        } catch(error){
            console.log(error)
        }
    }
}
export default controller