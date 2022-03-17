const {connection} = require('../config/connection')

const isUserNameExistsQuery = (username)=> {

    return connection.query('SELECT * FROM users WHERE username=$1',[username])
    .then((data)=>{
    if(data.rows.length===0) throw new Error ('Sorry,you are not registered')

    return (data.rows[0].password)
    })

}

module.exports = {isUserNameExistsQuery}