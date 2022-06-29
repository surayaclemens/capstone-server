const express = require('express');
const app = express();
// const fs = require('fs'); 
const cors = require('cors'); 
const PORT = process.env.PORT || 5050;
require('dotenv').config();



//Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    // res.send('welcome to my api, it works!')
    knex
        .select("*")
        .from("morphemes")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).send("Error getting morpheme data");
        })
});


//Routes
const phrasesRoute = require('./routes/phrasesRoute');
const { default: knex } = require('knex');
app.use('/phrases', phrasesRoute);



app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})