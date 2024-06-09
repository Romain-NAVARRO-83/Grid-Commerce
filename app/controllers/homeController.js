
const dataMapper = require('../data_mapper.js');


homeController = {
  homePage: async (req, res) => {
    try {
      const categories = await dataMapper.getAllCategories();
      res.render('home', {
        categories: categories,
        pageTitle: "Home",
        cart: req.session.cart
      });
    } catch {
      console.error(error);
      res.send("error");
    }
  }
}

// On met à disposition ces fonctions au routeur
module.exports = homeController;