const express = require('express');
const mongoose = require('mongoose');

const songRoutes = require('./Router/SongRouter');

const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect('mongodb+srv://Shashank_simejiya:12345@shashank.hgzvmub.mongodb.net/simple_crud')

app.use('/songs', songRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});