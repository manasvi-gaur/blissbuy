const mongoose = require("mongoose");

const AddressSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please provide your First Name"]
    },
    lastName:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
        
    },
    zipcod:{
        type:Number,
        require:true
        
    },
    user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
    }
    ,
    mobileNo:{
            type:String,
            require:true
    }
    
    

})

const Address = mongoose.model("addresses",AddressSchema);
module.exports=Address;