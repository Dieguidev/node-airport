const productsRouter = require('./products.route');
const express = require('express');
const passengersRouter = require('./passenger.route');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/passengers', passengersRouter);

}

module.exports = routerApi;



