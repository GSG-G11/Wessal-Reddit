const { join } = require("path");

const handleSignIn =(req,res) => {
  res.sendFile(join(__dirname,'..','..','public','index.html'))
  
}

module.exports = { handleSignIn };
