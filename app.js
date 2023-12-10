const express = require('express')
const app = express()
const usersRoute = require('./routes/users')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(usersRoute)




app.listen(3000)