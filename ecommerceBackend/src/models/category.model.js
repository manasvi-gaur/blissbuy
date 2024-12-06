const mongoose = require("mongoose");

const CategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    parentCategories:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
        
    },
    level:{
        type:Number,
        required:true,
        
    }
    
    

})

const Category = mongoose.model("categories",CategorySchema);
module.exports=Category;