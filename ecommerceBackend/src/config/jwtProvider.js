const jwt = require("jsonwebtoken")

// random secret key to make token
const SECRET_KEY = "mgfghjdbcnjx"

const generateToken  = (userId)=>{
    const  token = jwt.sign({userId:userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdFromToken = (token)=>{
    const decodedToken  = jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports = {generateToken,getUserIdFromToken}