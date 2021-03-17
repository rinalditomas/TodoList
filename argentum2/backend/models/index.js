const sequelize = require('sequelize')
const db = require ('../config/index')

const Product = require ('./Product')
const Category = require ('./Category')
const Reviews = require ('./Reviews')
const Cart = require ('./Cart')
const User = require ('./User')




Cart.hasMany(Product)
Cart.belongsTo(User)
Product.belongsToMany(Category,{through: "productCategory"})
//Product.hasMany(Reviews)



module.exports = {Product,Category,Cart,User,Reviews}