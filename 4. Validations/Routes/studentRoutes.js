const express = require('express');
const Router = express.Router();

const studentCntroller = require('../Controller/studentController.js');
const {validate, createValidator, updateValidator} = require('../validations/studentValidation.js');

Router.get("/",studentCntroller.index);
Router.get("/show/:id",studentCntroller.show);
Router.post("/store", (req,res,next)=>{
    const result = validate(createValidator,req.body);

    if(!result.success)
    {
        return res.status(400).json({satus : 'error', errors: result.errors});
    }
    studentController.store(req,res,next);
});

Router.put("/update/:id",studentCntroller.update);
Router.delete("/delete/:id",studentCntroller.delete);


module.exports = Router;