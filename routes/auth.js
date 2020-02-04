var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.post('/signup', function (req, res, next) {

  const { name, email, password, phone } = req.body;

  fetch('http://localhost:3001/signup', {
    method: 'POST',
    body: JSON.stringify({
      name, email, password, phone
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })

});

router.post('/signin', function (req, res, next) {

  const { email, password } = req.body;

  fetch('http://localhost:3001/signin', {
    method: 'POST',
    body: JSON.stringify({
      email, password
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
});

module.exports = router;
