const express = require('express')
const path = require('path')
const app = express()
const usersRoute = require('./routes/users')
const homeRoute = require('./routes/home')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))// it will access static files that should be included in the html pages for example like a css files


app.use(usersRoute)

app.use(homeRoute)


app.listen(3000)