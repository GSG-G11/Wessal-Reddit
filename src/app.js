require('env2')('.env')
const {join}=require('path')
const express = require('express')
const { notFound,serverError } = require('./controllers');
const router=require('./routes')

const app = express()

app.use(express.static(join(__dirname,'..','public')))


app.use(express.json())
app.use(express.urlencoded({extended: false }));
app.use(router)
app.use(notFound);
app.use(serverError)
app.set('port',process.env.PORT||8080)




module.exports = app
