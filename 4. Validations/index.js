const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const studentRouter = require('./Routes/studentRoutes.js');

app.use('/students', studentRouter); 

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});