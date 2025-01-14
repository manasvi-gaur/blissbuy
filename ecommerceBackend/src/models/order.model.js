const mongoose = require("mongoose");

const OrderSchema= new mongoose.Schema({
    
    
    orderDate:{
        type:Date,
        required:true,
        default:Date.now()
        
    },
    deliveryDate:{
        type:Date,
        
        
    },
    user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
    }
    ,
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderItems"
    }] ,
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    } ,
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        paymentId:{
            type:String,
        },
        paymentStatus:{
            type:String,
            default: "Pending",
        }
    } ,
    totalPrice:{
        type:Number,
        required:true
    },
    orderStatus:{
        type:String,
        required:true,
        default:"Pending"
    },
    totalItem:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

    
})

const Order = mongoose.model("orders",OrderSchema);
module.exports=Order;