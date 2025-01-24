const mongoose = require("mongoose")

const mondURL = "mongodb+srv://manasvigaur3:9zlY4B4Yp9VmXK44@ecommerce-cluster.2omhq.mongodb.net/"
// const mondURL = "mongodb://localhost:27017/bliss_eccomerce";
const connectDb=()=>{
    return mongoose.connect(mondURL);
}

module.exports={connectDb}