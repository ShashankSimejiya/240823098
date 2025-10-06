const express = require('express');
const Router = express.Router();
const SongController = require('../Controller/SongController');
const {
    createValidator,
    updateValidator,
    validate,
} = require("../Validation/SongValidator");

Router.get("/index", (req, res) => SongController.index(req, res));
Router.get("/show/:id", (req, res) => SongController.show(req, res));
Router.post("/store", (req, res, next) => {
    const result = validate(createValidator, req.body);

    if(!result.success) {
        return res.status(400).json({
            status : "error",
            errors : result.errors,
        });
    }
    SongController.store(req, res, next);
});
Router.put("/update/:id", (req, res) => SongController.update(req, res));
Router.delete("/delete/:id", (req, res) => SongController.destroy(req, res));

module.exports = Router;