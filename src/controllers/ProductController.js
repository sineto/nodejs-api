const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports =  {
  async index(request, response) {
		const { page = 1 } = request.query;
		const products = await Product.paginate({}, { page: page, limit: 5 });
  	return response.json(products);
  },

  async show(request, response) {
    const product = await Product.findById(request.params.id);
    return response.json(product);
  },

  async create(request, response) {
    const products = await Product.create(request.body);
    return response.json(products);
  },

  async update(request, response) {
    const product = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }, // tells mongoose to return a updated data
    );

    return response.json(product);
  },

  async destroy(request, response) {
    await Product.findByIdAndRemove(request.params.id);
    return response.send();
  }
};
