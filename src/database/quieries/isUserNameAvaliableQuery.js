const { connection } = require('../config/connection')


const isUserNameAvaliableQuery = ({username}) => connection.query('SELECT * FROM users WHERE username = $1',[username])
.then((dbData) => {
    if(dbData.rows.length !==0) throw new Error ('username has already taken,try another one')
})

module.exports = {isUserNameAvaliableQuery}
