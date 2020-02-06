var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/:productId', function (req, res, next) {
  const { productId } = req.params;

  fetch(`http://localhost:${process.env.PORT_OF_PRODUCTS}/products/${productId}`)
    .then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.post('/', function (req, res, next) {

  const {
    name,
    description,
    price,
    condition,
    author,
    category,
    images,
    location
  } = req.body;

  fetch(`http://localhost:${process.env.PORT_OF_PRODUCTS}/products/`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      description,
      price,
      condition,
      author,
      category,
      images,
      location
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.delete('/:productId', function (req, res, next) {
  const { productId } = req.params;

  fetch(`http://localhost:${process.env.PORT_OF_PRODUCTS}/products/${productId}`,
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


router.delete('/:productId', function (req, res, next) {
  const { productId } = req.params;

  fetch(`http://localhost:${process.env.PORT_OF_PRODUCTS}/products/${productId}`,
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

router.put('/:productId', function (req, res, next) {
  const { productId } = req.params;

  const {
    name,
    description,
    price,
    condition,
    author,
    category,
    images,
    location
  } = req.body;

  fetch(`http://localhost:${process.env.PORT_OF_PRODUCTS}/products/${productId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      description,
      price,
      condition,
      author,
      category,
      images,
      location
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});

router.put('/:productId/image', function (req, res, next) {
  const { productId } = req.params;

  const {
    image
  } = req.body;

  fetch(`http://localhost:${process.env.PORT_OF_PRODUCTS}/products/${productId}/image`, {
    method: 'PUT',
    body: JSON.stringify({
      image
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});


router.put('/:productId/deleteImage', function (req, res, next) {
  const { productId } = req.params;

  const {
    image
  } = req.body;

  fetch(`http://localhost:${process.env.PORT_OF_PRODUCTS}/products/${productId}/deleteImage`, {
    method: 'PUT',
    body: JSON.stringify({
      image
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => res.status(500).json({ err: `Error:${err}` }));

});
module.exports = router;


