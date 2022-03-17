const router = require('express').Router()
const { handleSignUp ,signUp,handleSignIn,signIn,handleAddPost } = require('../controllers')


router.get('/signUp',handleSignUp)
router.post('/signUp',signUp)
router.get('/signIn',handleSignIn)
router.post('/signIn',signIn)
router.get('/addPost',handleAddPost)



module.exports=router