const ProductService = require('../services/products.service');

const productService = new ProductService();
const find = (req, res) => {
  const products = productService.find();
  return res.json(products);
}

const findById = (req, res) => {
  const { id } = req.params;
  const product = productService.getProductsById(id);
  return res.json(product);
}

module.exports = {find, findById}
