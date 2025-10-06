// => all the methods of the CRUD operations

const express = require('express');
const app = express();
app.use(express.json());

// index => to get all the records
app.get("/",(req,res)=>{
    res.send("All Students!");
});

// show =>
app.get("/show/:id",(req,res)=>{
    res.send("One Student!");
});

// store => to create a new record
app.post("/store",(req,res)=>{
    // res.send("Create a New Student!");
    res.send(`Create a New Student! Name: ${req.body.name}, City: ${req.body.city}`);
});

// update => to update a record
app.put("/update/:id",(req,res)=>{
    // res.send("Update a Student!");
    res.send(`Successfully Updated Record!\n Name :: ${req.body.name},City :: ${req.body.city}`);
});

// delete => to delete a record
app.delete("/delete/:id",(req,res)=>{
    // res.send("Delete a Student!");
    res.send(`Successfully Deleted Record!\n Name :: ${req.body.name},City :: ${req.body.city}`);
});

app.listen(80,()=>{
    console.log("Server is Running at http://localhost:80/");
});

