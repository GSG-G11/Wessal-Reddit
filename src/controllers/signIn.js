
const {signInSchema} = require('../validation') 
const {isUserNameExistsQuery}=require('../database/quieries');
const comparePassword = require('../utils/comparePassword');
const jwt = require('jsonwebtoken')

const secreatKey =process.env.secreatKey


const signIn = (req,res) => {

const {username,password}=req.body    
console.log(req.body);
signInSchema.validateAsync(req.body)
.then(()=>isUserNameExistsQuery(username))
.then((hashPassword)=>comparePassword(password,hashPassword))
.then((isEqual)=>{
    if(isEqual){
            jwt.sign(id,secreatKey,(err,token)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.cookie('token', token)
                    res.json({
                        redirect:'/addPosts'
                    })
                }
            })
            
        }
    else{
        throw new Error ('wrong password or username')
    }
}
)

.catch((err)=>console.log(err))


}

module.exports = {signIn}