"use strict"

//? Catch asyn-errors
require('express-async-errors')

//? Call Models
const {BlogPost,BlogCategory} = require('../models/blogModel')

module.exports.BlogPost={

    list:async(req,res)=>{
        //* populate bağlı olduğu kaydın verisini getiriyor.
        const data = await BlogPost.find().populate("blogCategoryId")
        res.status(200).send({
            error:false,
            result:data
        })
    },
    listInCategory:async(req,res)=>{
        //* populate bağlı olduğu kaydın verisini getiriyor.
        const data = await BlogPost.find({blogCategoryId:req.params.categoryId}).populate("blogCategoryId")
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
        // req.params.postId
        // const data = await BlogPost.findById(req.params.postId)
        const data = await BlogPost.findOne({ _id: req.params.postId })

        res.status(200).send({
            error: false,
            result: data
        })
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
        const data = await BlogPost.deleteOne({ _id: req.params.postId })

        res.sendStatus( (data.deletedCount >= 1) ? 204 : 404 )
    },

}

module.exports.BlogCategory={

    list:async(req,res)=>{
        
        const data = await BlogCategory.find()
        res.status(200).send({
            error:false,
            result:data
        })
    },
    create:async(req,res)=>{
        // req.body ile veriler dışarıdan json olarak gönderilir
        const data = await BlogCategory.create(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            result:data
        })
    },
    read: async (req, res) => {
        // req.params.postId
        // const data = await BlogPost.findById(req.params.postId)
        const data = await BlogCategory.findOne({ _id: req.params.categoryId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        // güncelleme yapmak için req.params.postId bilgini ve req.body bilgisini belirtmek gerekir
        const data = await BlogCategory.updateOne({_id:req.params.categoryId},req.body)
        res.status(202).send({
            error:false,
            body:req.body,
            result:data
        })
    },

    delete: async (req, res) => {
        const data = await BlogCategory.deleteOne({ _id: req.params.categoryId })

        res.sendStatus( (data.deletedCount >= 1) ? 204 : 404 )
    },

}
