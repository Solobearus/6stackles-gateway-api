
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var verify = require('../middleware/verify');


// -------------- categories
router.get('/', function (req, res, next) {

    fetch(`${process.env.ADRESS_OF_PRODUCTS}/categories`, {
        headers: { 'Content-Type': 'application/json' }
    }).then(result => result.json())
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.get('/:categoryId', function (req, res, next) {
    const { categoryId } = req.params;

    fetch(`${process.env.ADRESS_OF_PRODUCTS}/categories/${categoryId}`, {
        headers: { 'Content-Type': 'application/json' }
    }).then(result => result.json())
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => res.status(500).json({ err: `Error:${err}` }));

});


module.exports = router;
