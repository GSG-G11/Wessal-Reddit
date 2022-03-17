const { handleSignUp } = require('./handleSignUp')
const { signUp } =require('./signUp')
const {handleSignIn} = require('./handleSignIn')
const {signIn} =require('./signIn')
const {handleAddPosts}=require('./handleAddPosts')
const {addPosts}=require('./addPosts')
const notFound = require('./404');
const serverError = require('./500');


module.exports = {handleSignUp,signUp,handleSignIn,signIn,handleAddPosts,addPosts,notFound,serverError}