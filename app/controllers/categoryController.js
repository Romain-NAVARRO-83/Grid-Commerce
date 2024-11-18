// const dataMapper = require('../data_mapper.js');
const { Category, Product } = require('../model/associations.js');

categoryController = {
  categoryPage: async (req, res) => {
    const idCategory = parseInt(req.params['id']);
    try {
      const category = await Category.findByPk(idCategory, {
        include: "products"
      });
      const subCategories = await Category.findAll({
        where: {
          id_parent: idCategory
        },
        include: "products"
      });
      console.log(subCategories);

      res.render('category', {
        category: category,
        subCategories: subCategories,
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