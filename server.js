const express = require('express');
const app = express();
const fs = require('fs'); 
const cors = require('cors'); 

//Middleware
app.use(express.json());
app.use(cors());

//Routes
const variable1 = require('./routes/variable1');
app.use('/variable1', variable1);

const variable2 = require('./routes/route2');
app.use('/route2', variable2);


app.listen(8080, () => {
    console.log('Server is listening on 8080');
})