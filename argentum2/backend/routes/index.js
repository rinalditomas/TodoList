const express = require ('express')
const router = express.Router()
const userRouter = require ('./users')
const productRouter = require ('./products')
const cartRouter = require ("./cart")
const checkJWT= require("./middlewares/jwt")
const {User} = require ('../models/index')




router.use ("/users", userRouter)
router.use ("/products", productRouter)
// router.use ("/", productRouter)
router.use ("/cart",cartRouter)

router.post ("/me",checkJWT ,(req,res,next) => {
    User.findByPk(req.user.id)
    .then (user => res.send({id:user.id,email:user.email,name:user.name,isAdmin:user.isAdmin}))
    .catch(next)
    })


module.exports = router