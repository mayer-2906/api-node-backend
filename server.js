require('dotenv').config();
const express = require('express')
const cors = require('cors')
const { dbConection } = require('./db/config.js')
const app = express()

app.use(cors())

//dbconection();
// data of mongodb
// user: admin_users
// password: HbHMxbmSs2Fk9Aaz

dbConection();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8080)