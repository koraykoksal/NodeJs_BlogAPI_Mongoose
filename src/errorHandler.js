"use strict"

// Catch Error


module.exports = (err,req,res,next)=>{

//? response içinde default olarak bir statuscode bilgisi var
const errorStatusCode = res.statusCode ?? 500

res.status(errorStatusCode).send({

    error:true,
    message:err.message,//express den gelen değer
    cause:err.cause,//express den gelen değer
    body:req.body,//hata mesajında kullanıcının ne gönderdiğini görmek için
})

}









