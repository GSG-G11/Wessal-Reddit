const router = require('express').Router()
const { handleSignUp ,signUp,handleSignIn,signIn,handleAddPosts,addPosts } = require('../controllers')


router.get('/signUp',handleSignUp)
router.post('/signUp',signUp)
router.get('/signIn',handleSignIn)
router.post('/signIn',signIn)
router.get('/addPosts',handleAddPosts)
router.post('/addPosts',addPosts)



module.exports=router