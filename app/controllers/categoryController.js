// const dataMapper = require('../data_mapper.js');
const { Category, Product } = require('../model/associations.js');

categoryController = {
  categoryPage: async (req, res) => {
    const idCategory = parseInt(req.params['id']);
    try {
      // const categories = await dataMapper.getAllCategories();
      const categories = await Category.findAll();
      const category = await Category.findByPk(idCategory, {
        include: "products",
      });
      // const category = categories.find((category) => category.name.replace(" ", "-") === categoryName);
      // const products = await dataMapper.getCategoryProducts(category.id);

      // console.log(products);
      res.render('category', {
        category: category,
        categories: categories,
        pageType: "category",
        cart: req.session.cart
      })
    } catch (error) {
      console.error(error);
      res.send("error");
    }
  }
}

module.exports = categoryController;