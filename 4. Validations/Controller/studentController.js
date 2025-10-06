exports.index = (req, res) => {
  res.send("Welcome to the Ph.D. Students API!\n");
};

exports.show = (req, res) => {
  res.send(`Showing data for ID: ${req.params.id}\n`);
};

exports.store = (req, res) => {
  res.send(`Data received: ${req.body.name}, ${req.body.city}\n`);
};

exports.update = (req, res) => {
  res.send(
    `Data updated for ID: ${req.params.id}, Name: ${req.body.name}, City: ${req.body.city}\n`
  );
};

exports.delete = (req, res) => {
  res.send(`Data deleted for ID: ${req.params.id}\n`);
};
