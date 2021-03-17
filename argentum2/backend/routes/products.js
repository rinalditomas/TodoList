const express = require('express');
const router = express.Router();
const {Product} = require("../models/index")
const { Op } = require("sequelize");

router.get ("/", (req,res,next) => {
    // console.log(req.query)
    if (req.query.producto){
        Product.findAll({
            where:{
                nombre:{
                    [Op.like]: req.query.producto
                }
            }
        })
        // .then(categorias =>{
        //    categorias.map((categoria)=>{
        //     Producto.findAll({
        //         where:{
        //             categoriumId: categoria
        //         }
        //     })
        //    })
        .then((productos)=>{
            res.send(productos)
            })
        //})
    }else{
    Product.findAll()
    .then (productos => {
        res.send (productos)
    })
    .catch (error =>{
        next (error)
    })
    }
})

router.get("/search/:query", (req, res) => {
    let query = req.params.query
    console.log(query)
        Product.findAll({
        where:{
            nombre:{
                [Op.substring]:query
            }
        }
    })
    .then(producto => { res.send(producto) })
})



router.get("/:id", (req, res) => {
    let id = req.params.id

    Product.findByPk(id)
    .then(producto => { res.send(producto) })
})

router.post ("/", (req,res,next)=>{
    console.log(req.body)
    Product.create (req.body)
    .then ((producto)=>{
        res.send(producto)
    })
})


router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    
    Product.findByPk(id)
        .then(data => {
            !data ? res.sendStatus(404) :
                data.update(req.body)
                    .then(data => res.send(data))
        })
        
})


router.delete("/:id", (req, res, next) => {
    let productoId = req.params.id;

    Product.destroy({
        where: {
            id: productoId
        }
    }).then(() => {

        res.send("Producto eliminado!!")

    })
})

module.exports = router