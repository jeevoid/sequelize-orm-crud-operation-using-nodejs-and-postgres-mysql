const Sequelize = require("sequelize");

const db = require("../config/database");

//auto create table in database 

    users = db.define('users',{
    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    username: {
    type: Sequelize.TEXT,
    
        },
    password: { 
    type: Sequelize.TEXT,
    
}
}, {
    //creates time created and updated
timestamps: true
});
module.exports = users  


