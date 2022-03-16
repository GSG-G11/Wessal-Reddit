const bcrypt = require('bcryptjs')

const hashPassword = (password) => 
{
  console.log(password)
  return bcrypt.hash(password,10)
    
}
module.exports=hashPassword