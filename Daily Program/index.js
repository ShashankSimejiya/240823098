// import add from './add.js';
// console.log(add(10, 20));
// console.log(add(5, 15)); // Example of using the add function with different arguments


// const add = require('./require.js');
// console.log(add(10, 20));
// console.log(add(5, 15)); // Example of using the add function with different arguments

// => all the methods of the CRUD operations

// const express = require('express');
// const app = express();
// app.use(express.json());

// // index 
// app.get("/",(req,res)=>{
//     res.send("All Students!");
// });

// // show
// app.get("/show/:id",(req,res)=>{
//     res.send("One Student!");
// });

// // store
// app.post("/store",(req,res)=>{
//     // res.send("Create a New Student!");
//     res.send(`Create a New Student! Name: ${req.body.name}, City: ${req.body.city}`);
// });

// // update
// app.put("/update/:id",(req,res)=>{
//     // res.send("Update a Student!");
//     res.send(`Successfully Updated Record!\n Name :: ${req.body.name},City :: ${req.body.city}`);
// });

// // delete
// app.delete("/delete/:id",(req,res)=>{
//     // res.send("Delete a Student!");
//     res.send(`Successfully Deleted Record!\n Name :: ${req.body.name},City :: ${req.body.city}`);
// });

// app.listen(80,()=>{
//     console.log("Server is Running at http://localhost:80/");
// });


//with controller

const express = require('express');
const {index,show,store,update,destory} = require("./Controllers/studentController.js");
const app = express();

app.use(express.json());

app.get("/",index);
app.get("/Show/:id",show);
app.post("/Store",store);
app.put("/Update/:id",update);
app.delete("/delete/:id",destory);

app.listen(80,()=>{
    console.log(`Server is Running at http://localhost:80/`);
});