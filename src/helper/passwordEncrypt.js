"use strict"


//* şifreleme yapılacak kütüphane dahil edililir
const crypto = require('node:crypto')

//* şifreleme yapılacak anahtar kelime
const keyCode = process.env.SECRET_KEY

//* şifreleme yapılacak sayı miktarı
const loopCount = 10000

//* 32 veya 64 karakter olarak çıktı verme
const charsCount=32

//* şifreleme tipi
const encType = 'sha256'


module.exports = function(password){
    
    const encode = crypto.pbkdf2Sync(password,keyCode,loopCount,charsCount,encType)
    return encode.toString('hex')
}