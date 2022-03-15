const { join } = require("path");

const handleSignUp =(req,res) => {
  res.sendFile(join(__dirname,'..','..','public','html','SignUpPage.html'))
  
}

module.exports = { handleSignUp };
