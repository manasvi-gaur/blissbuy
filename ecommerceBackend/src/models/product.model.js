const mongoose = require("mongoose");

const ProductSchema= new mongoose.Schema({
    
    
    createdAt:{
        type:Date,
        
        default:Date.now()
        
    },
    
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    } ,
    imageUrl:{
        type:String,

    },
    sizes:[
        {
            name:{type:String},
            quantity:{type:String}
        }
    ],
    color:{
        type:String,
    },
    brand:{
        type:String,
    },
    
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
       
    }

    
})

const Product = mongoose.model("products",ProductSchema);
module.exports=Product;