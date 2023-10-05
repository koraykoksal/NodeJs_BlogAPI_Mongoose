"use strict"


const mongoose = require('mongoose')


const UserSchema=new mongoose.Schema({

    email:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"Email field must be required."],
        validate:[
            (email)=>{email.includes('@') && email.includes('.')},"Error type is incorrect."
        ]

    },
    password:{
        type:String,
        trim:true,
        unique:false,
        required:[true,"Password field must be required."],
        set:(password) => password + '987'
    },
    firstName:String,
    lastName:String,

},
{
    collection:"users",
    timestamps:true
})


module.exports=mongoose.model('User',UserSchema)
