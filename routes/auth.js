var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.post('/signup', function (req, res, next) {

  const { name, email, password, phone } = req.body;

  fetch(`${process.env.ADRESS_OF_AUTH_CONTROLLER}/signup`, {
    method: 'POST',
    body: JSON.stringify({
      name, email, password, phone
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(400).json({ err: err }))

});

router.post('/signin', function (req, res, next) {

  const { email, password } = req.body;

  fetch(`${process.env.ADRESS_OF_AUTH_CONTROLLER}/signin`, {
    method: 'POST',
    body: JSON.stringify({
      email, password
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(400).json({ err: err }))

});

router.post('/verify', function (req, res, next) {

  const { token } = req.body;

  fetch(`${process.env.ADRESS_OF_AUTH_CONTROLLER}/verify`, {
    method: 'POST',
    body: JSON.stringify({
      token
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(400).json({ err: err }))

});

module.exports = router;
