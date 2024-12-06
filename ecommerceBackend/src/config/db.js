const mongoose = require("mongoose")

const mondURL = "mongodb+srv://manasvigaur:bliss_eccomerce@cluster0.ficiyoh.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondURL);
}

module.exports={connectDb}