const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please provide your First Name"]
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"Customer"
    },
    mobileNo:{
        type:String,
        
    },
    addresses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"addresses"
        }
    ],
    paymentInformation:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"payment_Information"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const User = mongoose.model("users",userSchema);
module.exports=User;