const mongoose = require("mongoose");

const CartItemSchema= new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"cart"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    }
    ,size:{
        type:Number,
        required:true,
        
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    }
    
    

})

const CartItem = mongoose.model("cartItems",CartItemSchema);
module.exports=CartItem;