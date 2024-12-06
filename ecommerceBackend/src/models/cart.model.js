const mongoose = require("mongoose");

const CartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    cartItem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartItems",
        required:true
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
    }
    
    

})

const Cart = mongoose.model("cart",CartSchema);
module.exports=Cart;