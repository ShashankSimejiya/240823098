const express = require('express');
const Router = express.Router();

const {index,show,store,update,deleteitem} = require('../studentController/studentController.js');

Router.get("/",index);
Router.get("/show/:id",show);
Router.post("/store",store);
Router.put("/update/:id",update);
Router.delete  ("/delete/:id",deleteitem);


module.exports = Router;