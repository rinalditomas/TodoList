const Sequelize = require ('sequelize')
const db = new Sequelize ('postgres://localhost:5432/argentum',{ logging:false})

module.exports = db