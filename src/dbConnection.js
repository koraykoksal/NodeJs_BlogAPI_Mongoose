"use strict"



// mongoose çağırılır
const mongoose = require('mongoose')


// mongodb bağlantı metodu
mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/')
.then((res)=>console.log('* DB Connected *'))
.catch((err)=>console.log(' DB Not Conneted ' +err ))





