const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello ,Shashank Simejiya!");
});

app.get("/home",(req,res)=>{
    res.send("home");
});

app.listen(80,()=>{
    console.log("Server is Running at http://localhost:80/");
});