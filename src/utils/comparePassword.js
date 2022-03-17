const bcrypt = require('bcryptjs')

const comparePassword = (password,hashPassword)=>
{
  return bcrypt.compare(password,hashPassword)
  .then((result)=>{
    console.log(result)
    return result
  })
    
}
module.exports=comparePassword