"use strict"

//? Catch asyn-errors
require('express-async-errors')

//? Call Models
const {BlogPost} = require('../models/blogModel')

module.exports.BlogPost={

    list:async(req,res)=>{
        const data = await BlogPost.find()
        res.status(200).send({
            error:false,
            result:data
        })
    },
    create:async(req,res)=>{
        // req.body ile veriler dışarıdan json olarak gönderilir
        const data = await BlogPost.create(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            result:data
        })
    },
    read: async (req, res) => {
        
    },

    update: async (req, res) => {
        // güncelleme yapmak için req.params.postId bilgini ve req.body bilgisini belirtmek gerekir
        const data = await BlogPost.updateOne({_id:req.params.postId},req.body)
        res.status(202).send({
            error:false,
            body:req.body,
            result:data
        })
    },

    delete: async (req, res) => {
        
    },

}
