//with controller

const express = require('express');
const {index,show,store,update,deleteItem} = require("./studentController/studentController.js");
const app = express();

app.use(express.json());

app.get("/",index);
app.get("/show/:id",show);
app.post("/store",store);
app.put("/update/:id",update);
app.delete("/delete/:id",deleteItem);

app.listen(80,()=>{
    console.log(`Server is Running at http://localhost:80/`);
});