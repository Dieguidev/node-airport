const PassengerService = require('../services/passengers.service');


const passengerService = new PassengerService();
  const getPassengers  = async (req, res) => {
  try {
    const products = await passengerService.find();
    return res.json(products);
  } catch (error) {
    throw new Error(error);
  }
}

const findById = (req, res) => {
  const { id } = req.params;
  const product = passengerService.getProductsById(id);
  return res.json(product);
}

module.exports = {getPassengers, findById}
