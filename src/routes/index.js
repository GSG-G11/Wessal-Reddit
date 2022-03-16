const router = require('express').Router()
const { handleSignUp ,signUp,handleSignIn } = require('../controllers')


router.get('/signUp',handleSignUp)
router.post('/signUp',signUp)
router.get('/signIn',handleSignIn)



module.exports=router