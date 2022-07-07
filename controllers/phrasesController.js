const knex = require('knex')(require('../knexfile'));

// getting full list of translations
const index = (_req, res) => {
    knex('morphemes')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving language data: ${err}`)
            );
};

module.exports = {
    index
}