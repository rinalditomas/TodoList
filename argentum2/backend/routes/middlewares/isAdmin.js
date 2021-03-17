const jwt= require ("jsonwebtoken")
const {User} = require ('../../models')


const isAdmin = (req,res,next)=>{
   User.findByPk (req.user.id)
   .then (usuario =>{
    if(!usuario.isAdmin){
        return res.status(401).send("usuario no admin")
    }else{
        next()  
    }
    })
}

module.exports = isAdmin