var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var verify = require('../middleware/verify');

router.get('/', function (req, res, next) {

  fetch(`${process.env.ADRESS_OF_PRODUCTS}/products`)
    .then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.get('/:productId', function (req, res, next) {
  const { productId } = req.params;

  fetch(`${process.env.ADRESS_OF_PRODUCTS}/products/${productId}`)
    .then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.post('/', verify, function (req, res, next) {
  console.log(req.body);
  fetch(`${process.env.ADRESS_OF_PRODUCTS}/products/`, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.delete('/:productId', verify, function (req, res, next) {
  const { productId } = req.params;

  fetch(`${process.env.ADRESS_OF_PRODUCTS}/products/${productId}`,
    {
      method: 'DELETE',
    })
    .then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.put('/:productId', verify, function (req, res, next) {
  const { productId } = req.params;

  fetch(`${process.env.ADRESS_OF_PRODUCTS}/products/${productId}`, {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.put('/:productId/image', verify, function (req, res, next) {
  const { productId } = req.params;

  fetch(`${process.env.ADRESS_OF_PRODUCTS}/products/${productId}/image`, {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});


router.put('/:productId/deleteImage', verify, function (req, res, next) {
  const { productId } = req.params;

  fetch(`${process.env.ADRESS_OF_PRODUCTS}/products/${productId}/deleteImage`, {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});


module.exports = router;


