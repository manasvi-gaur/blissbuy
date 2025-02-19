const mongoose = require("mongoose");

const OrderItemsSchema= new mongoose.Schema({
    
    deliveryDate:{
        type:Date,
        
        
    },
    userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
            require:"true"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        require:true

    } ,
    
    price:{
        type:Number,
        required:true
    },
    size:[
        {
            name:{type:String},
            quantity:{type:String}
        }
    ],
    quantity:{
        type:Number,
        required:true
    }

    
})

const OrderItem = mongoose.model("orderItems",OrderItemsSchema);
module.exports=OrderItem;