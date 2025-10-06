const express = require('express');
const sequelize = require('sequelize');

const PORT = 3000;
const app = express();
app.use(express.json());

const studentRouter = require('./Router/studentRouter');
app.use('/student',studentRouter);

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});