require('dotenv').config();
const express = require('express')
const cors = require('cors')
const { dbConection } = require('./db/config.js')
const app = express()

app.use(cors())

app.use(express.json())
//dbconection();
// data of mongodb
// user: admin_users
// password: HbHMxbmSs2Fk9Aaz

dbConection();

app.get('/users', require('./routes/user-routes'))

app.post('/users', require('./routes/user-routes'))

app.listen(8080)