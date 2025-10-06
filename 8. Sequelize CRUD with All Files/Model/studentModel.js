const {DataTypes}= require('sequelize');
const sequelize = require('../Connection/connection');

// Define Student Model
const Student = sequelize.define('Student', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
        // unique : true,
    },
    city : {
        type : DataTypes.STRING,
        allowNull : false
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false,
        min_length : 10,
        max_length : 10
    }
});

sequelize.sync()
    .then(() => {
        console.log("Student Table Created Successfully");
    })
    .catch((err) => {
        console.log("Student Table Cannot be Created", err);
    });

module.exports = Student;