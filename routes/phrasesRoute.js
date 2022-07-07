const express = require('express');
const router = express.Router();

const phrasesController = require('../controllers/phrasesController');
const knex = require('knex')(require('../knexfile'));

router.get('/', phrasesController.index);

router.route('/:phraseId').get((req,res) => {
    knex('morphemes')
        .where({id: req.params.phraseId})
        .then((phrase) => {
            res.status(200).json(phrase);
        })
        .catch(() => {
            res.status(400).json({
                message: `Error getting phrase: ${req.params.id}`
            })
        });
});

module.exports = router;