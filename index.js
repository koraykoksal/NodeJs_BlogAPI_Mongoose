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

//! bu bir fonksiyon olduğundan dolayı fonksiyon mantığına göre parantez aç kapa yaparak çalıştırılabilir
// senkronizasyon yapıldıktan sonra tekrar çalıştırmaya gerek yoktur
// require('./src/sync')()

//! Routers
//? url adresine /blog ile bir istek atıldığında app.use çalıştır
// app.use('/blog',require('./src/routers/blogRouter'))
app.use(require('./src/routers/userRoute'))
app.use(require('./src/routers/blogRouter'))



//! errorHandler
//? errorHandler çağırılır ve çalıştırılır
//? errorHandler en alt sırada çalıştırılır
app.use(require('./src/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))