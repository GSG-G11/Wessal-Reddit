const {signUpSchema} = require('../validation')
const { isUserNameAvaliableQuery ,addNewUserQuery }= require('../database/quieries')
const hashPassword=require('../utils')
const jwt = require('jsonwebtoken')

const secreatKey =process.env.secreatKey

const signUp=(req,res)=>{

const {username,password,confirmPassword } = req.body
console.log(req.body);
 signUpSchema.validateAsync(req.body)
.then(()=> isUserNameAvaliableQuery({username}))
.then(()=> hashPassword(password))
.then((hashedPassword)=>addNewUserQuery({username,hashedPassword}))
.then((data)=>{
    const userId=data.rows[0].id
    jwt.sign({userId},secreatKey,(err,token)=>{
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
})
.catch((err)=>res.json`${err}`)



}
module.exports= {signUp}
