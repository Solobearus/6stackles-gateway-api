var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var router = express.Router();

router.post('/user', function (req, res, next) {

});

router.get('/users', function (req, res, next) {

});

router.get('/:userid', function (req, res, next) {
    const { userid } = req.params;

    fetch(`${process.env.ADRESS_OF_USERS}/${userid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(result => result.json())
        .then(result => {
            console.log(`getProductByAuthorId --- ${result}`);
            res.json(result);
        })
        .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.put('/:userid', function (req, res, next) {

});

router.delete('/:userid', function (req, res, next) {

});

module.exports = router;
