const {connectoin}=require('../config/connection')

const addPostQuery = ({title,content,userId}) =>{
    return connectoin.query('INSERT INTO posts (title,content,user_id) VALUES ($1,$2,$3) RETURNING *',[title,content,userId])
}
    

    module.exports={addPostQuery}