
const { Product } = require('../model/associations.js');
const homeController = {
  homePage: async (req, res) => {
    try {
      const homeproducts = await Product.findAll({ limit: 8 });
      // const homeproducts = await httpResponse.json()
      // console.log(homeproducts);
      res.render('home', {
        pageTitle: "Home",
        pageType : "home",
        homeproducts,
        cart: req.session.cart
      });
    } catch (error){
      console.error(error);
      res.send("error");
    }
  }
}

module.exports = homeController;