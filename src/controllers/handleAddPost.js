const { join } = require("path");

const handleAddPost =(req,res) => {
  res.sendFile(join(__dirname,'..','..','public','html','addPost.html'))
  
}

module.exports = { handleAddPost };
