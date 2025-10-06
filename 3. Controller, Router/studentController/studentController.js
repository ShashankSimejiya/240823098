exports.index = (req, res) => {
    res.send("Hello,World!\n");
};

exports.show = (req, res) => {
    res.send(`Hello,Student!\n ID : ${req.params.id}`);
};

exports.store = (req, res) => {
    res.send(`Successfully Stored Record!\n ${req.body.name},${req.body.city}`);
};

exports.update = (req, res) => {
    res.send(`Successfully Updated Record!\n ID: ${req.params.id},Name :: ${req.body.name},${req.body.city}`);
};

exports.deleteitem = (req, res) => {
    res.send(`Successfully Deleted Record with ID :: ${req.params.id}`);
};

// exports = {index, show, store, update, destory};