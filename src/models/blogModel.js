"use strict"


const mongoose =require('mongoose')

// 1. parametre model ayarları
// 2. parametre tablo ayarları
// const nameSchema_Example = new mongoose.Schema({
//     // _id // auto created

//     // fieldName:String, // shorthand using

//     fieldName:{
//         type:String,
//         default:null,
//         trim:true, // gelen veriyi trimden geçir
//         select:true, // show,unshow
//         index:true, // bir sutüna daha hızlı erişmek için kullanılır
//         unique:true,
//         required:[true,'Error-Message'],
//         validate:[function(data){return true},"Error-Message"],
//         get:function(data){return true}, // veri çağırıldığında çalıştırılacak fonksiyon
//         set:function(data){return true}, // veri kaydederken çalıştırılacak fonksiyon

//     }
// },
// {
//     collection:'collectionName',
//     timestamps:true
// })

const blogCategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    }

}, {
    collection: 'blogCategories',
    timestamps: true
})


//* blog dataları için oluşturulan Schema
const blogPostSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    content:{
        type:String,
        trim:true,
        required:true,
    },
    published:{
        type:Boolean,
        default:true,
    }

},
{
    collection:'blogPost',
    timestamps:true
})


//const BlogPostModel = mongoose.model('blogPost',blogPostSchema)
// module.exports={
//     BlogPost:BlogPostModel
// }

module.exports = {
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema),
    BlogPost:mongoose.model('BlogPost',blogPostSchema)
}