const mongoose = require("mongoose");

const CartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    cartItem:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartItems",
        required:false
    }],
    totalPrice:{
        type:Number,
        required:false,
        default:0
    }
    
    

})

const Cart = mongoose.model("cart",CartSchema);
module.exports=Cart;