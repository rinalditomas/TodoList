const express = require("express");
const router = express.Router()
const {Cart} = require ('../models')
const jwt= require ("jsonwebtoken")
const checkJWT= require("./middlewares/jwt")
const isAdmin=require("./middlewares/isAdmin")

router.get("/private",checkJWT,isAdmin,(req,res)=>{
    res.status(200).json(req.user)
     })

module.exports = router