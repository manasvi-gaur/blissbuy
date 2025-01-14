const mongoose = require("mongoose")

// const mondURL = "mongodb+srv://manasvigaur:bliss_eccomerce@cluster0.ficiyoh.mongodb.net/?retryWrites=true&w=majority"
const mondURL = "mongodb://localhost:27017/bliss_eccomerce";
const connectDb=()=>{
    return mongoose.connect(mondURL);
}

module.exports={connectDb}