const router = require('express').Router()
const { handleSignUp ,signUp,handleSignIn,signIn } = require('../controllers')


router.get('/signUp',handleSignUp)
router.post('/signUp',signUp)
router.get('/signIn',handleSignIn)
router.post('/signIn',signIn)



module.exports=router