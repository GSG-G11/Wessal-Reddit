const { join } = require("path");

const handleAddPosts =(req,res) => {
  res.sendFile(join(__dirname,'..','..','public','html','addPosts.html'))
  
}

module.exports = { handleAddPosts };
