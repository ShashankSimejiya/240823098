// import Library mongoose
const mongoose = require('mongoose');

// create connection mongoose
mongoose.connect("mongodb+srv://Shashank_simejiya:210204@shashank.hgzvmub.mongodb.net/shashank")
    .then(() => {
        console.log("Mongoose Connected Successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Student Model 
const studentScahema = new mongoose.Schema({
    name : String,
    department : String,
    startYear : Number,
    endYear : Number,
    enrollment : Number,
    address : String
});

// create collection
const Student = mongoose.model("Student",studentScahema);

console.log("Mongoose Connected Successfully");

// create document
const student = new Student({
    name : "Shashank",
    department : "Computer Science",
    startYear : 2024,
    endYear : 2026,
    enrollment : 123456,
    address : "India",
});

student
    .save()
    .then(() => {
        console.log("Student Saved Successfully");
    })
    .catch((error) => {
        console.log("Error Saving Student",error);
    })