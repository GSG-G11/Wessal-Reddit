const addPostQuery=require('../database/quieries')

const addPosts=(req,res)=>{
    const {title,content}=req.body
    console.log(req.body)
 
    addPostQuery.validateAsync(req.body)

    
   
}

module.exports={addPosts}
