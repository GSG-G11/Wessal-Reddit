const bcrypt = require('bcryptjs')

const hashPassword = (password) => 
{
  return bcrypt.hash(10,password)
    
}
module.exports={hashPassword}