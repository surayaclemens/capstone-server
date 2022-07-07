const express = require('express');
const app = express();
const cors = require('cors'); 
const PORT = process.env.PORT || 5050;
require('dotenv').config();

//Middleware
app.use(express.json());
app.use(cors());


// Getting data from DB
app.get('/', (_req, res) => {
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
const knex = require('knex')(require('./knexfile'));
app.use('/phrases', phrasesRoute);


//Get server to listen on port
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})