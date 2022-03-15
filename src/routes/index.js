const router = require('express').Router()
const { handleSignUp ,signUp } = require('../controllers')


router.get('/signUp',handleSignUp)
router.post('/signUp',signUp)




module.exports=router