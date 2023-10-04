"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv express-async-errors
 * npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */

//! expresse json veri göndereceğim ve bu verileri obje olarak almak için express.json() çalıştırıyorum.
app.use(express.json())

//! Connection to MongoDB
//? db connection bağlantısında middleware yazılmadığı için app.use kullanılmadı
require('./src/dbConnection')


app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})




//! errorHandler
//? errorHandler çağırılır ve çalıştırılır
//? errorHandler en alt sırada çalıştırılır
app.use(require('./src/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))