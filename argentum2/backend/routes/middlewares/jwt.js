//const { default: axios } = require("axios")
const jwt= require ("jsonwebtoken")

const checkJWT = (req,res,next)=>{

    if(!req.headers.authorization){
        return res.status(401).send("missing token")
    }
    const token = req.headers.authorization.split(" ")[1]
 
    const data = jwt.verify (token,"argentum")
  
    if(data){
        req.user=data
        return next()
    }else{
    return res.status(401).send("entrada no permitida")
    }
}
module.exports = checkJWT