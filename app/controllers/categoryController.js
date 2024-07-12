// const dataMapper = require('../data_mapper.js');
const {Category,Product} = require('../model/associations.js');

categoryController = {
  categoryPage: async (req, res) => {
    const categoryName = req.params['categoryName'].replace("-"," ");
    try {
      // const categories = await dataMapper.getAllCategories();
      const categories = await Category.findAll();
      const category = await Category.findOne({
        where : {
          name : categoryName
        },
        include : "products"
      })
      // const category = categories.find((category) => category.name.replace(" ", "-") === categoryName);
      // const products = await dataMapper.getCategoryProducts(category.id);

      // console.log(products);
      res.render('category', {
        category: category,
        categories: categories,
        products: category.products,
        pageType: "category",
        cart : req.session.cart
      })
    } catch (error) {
      console.error(error);
      res.send("error");
    }
  }
}

module.exports = categoryController;