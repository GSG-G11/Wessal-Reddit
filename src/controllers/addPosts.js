const addPostQuery=require('../database/quieries')

const jwt = require('jsonwebtoken')
const secreatKey =process.env.secreatKey


const addPosts=(req,res)=>{
    const {title,content}=req.body
    console.log(req.body)
    console.log(req.cookies)
 
    const token = req.cookies.token

jwt.verify(token,secreatKey,(err,decoded)=>{
    if(err){
        console.log(err,'11111');
    }
    else{
        // console.log(decoded);
      const userId=decoded.userId
        addPostQuery({title,content,userId})
    }

})


    
   
}

module.exports={addPosts}
