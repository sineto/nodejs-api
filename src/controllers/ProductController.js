const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports =  {
  async index(request, response) {
    const products = await Product.find();
    return response.json(products);
  },

  async create(request, response) {
    const products = await Product.create(request.body);
    return response.json(products);
  },
};
