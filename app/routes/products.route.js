const express = require('express');
const { find, findById } = require('../controllers/product.controller');

const { getProductSchema } = require('../schemas/product.schema');
const { validatorHandler } = require('../middlewares/validator.handler');

const router = express.Router();



router.get('/', find);

router.get('/:id',validatorHandler(getProductSchema, 'params'), findById);

router.get('/filter', ( req, res ) => {
  res.send('Yo soy un filter')
});

router.post('/', ( req, res ) => {
  const { body } = req;
  res.status(201).json({
    message: 'Created Product',
    data: body
  })
});

router.patch('/:id', ( req, res ) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    message: 'Updated Product',
    data: body,
    id
  })
});

router.delete('/:id', ( req, res ) => {
  const { id } = req.params;
  res.json({
    message: 'Delete Product',
    id
  })
});

module.exports = router;
