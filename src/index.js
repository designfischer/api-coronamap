const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
//
const routes = require('./routes/routes')

const app = express()

const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => console.log('Server running on port 3333'))