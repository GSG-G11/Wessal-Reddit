const {signUpSchema} = require('../validation')
const { isUserNameAvaliableQuery ,addNewUserQuery }= require('../database/quieries')
const {hashPassword}=require('../utils')

const signUp=(req,res)=>{

const {username,password,confirmPassword } = req.body
// console.log(req.body)
 signUpSchema.validateAsync(req.body)
.then(()=> isUserNameAvaliableQuery({username}))
.then(()=> hashPassword({password}))
.then((hashedPassword)=>addNewUserQuery({username,hashedPassword}))
.then(()=> res.cookie('username',))
.catch((err)=>res.json`${err}`)



}
module.exports= {signUp}
