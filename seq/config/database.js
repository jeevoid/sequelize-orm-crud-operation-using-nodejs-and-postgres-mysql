const Sequelize = require("sequelize")


module.exports = new Sequelize('xelp', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
  
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    } 

});