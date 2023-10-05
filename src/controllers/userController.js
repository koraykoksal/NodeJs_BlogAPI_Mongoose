"use strict"


const User = require('../models/userModel')

module.exports.User={

    list:async(req,res)=>{
        
        const data = await User.find()
        res.status(200).send({
            error:false,
            result:data
        })
    },
    create:async(req,res)=>{
        // req.body ile veriler dışarıdan json olarak gönderilir
        const data = await User.create(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            result:data
        })
    },
    read: async (req, res) => {
        // req.params.postId
        // const data = await BlogPost.findById(req.params.postId)
        const data = await User.findOne({ _id: req.params.userId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        // güncelleme yapmak için req.params.postId bilgini ve req.body bilgisini belirtmek gerekir
        const data = await User.updateOne({_id:req.params.userId},req.body)
        res.status(202).send({
            error:false,
            body:req.body,
            result:data
        })
    },

    delete: async (req, res) => {
        const data = await User.deleteOne({ _id: req.params.userId })

        res.sendStatus( (data.deletedCount >= 1) ? 204 : 404 )
    },

}