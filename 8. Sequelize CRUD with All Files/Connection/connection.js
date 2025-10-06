const sequelize = require('sequelize');

// Database Connection
const db = new sequelize('university', 'root', '' ,{
    host : 'localhost',
    dialect : 'mysql'
});

db.authenticate()
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Database Cannot Connected",err);
    })

module.exports = db;