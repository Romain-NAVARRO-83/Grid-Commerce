
const homeController = {
  homePage: async (req, res) => {
    try {
      res.render('home', {
        pageTitle: "Home",
        cart: req.session.cart
      });
    } catch {
      console.error(error);
      res.send("error");
    }
  }
}

module.exports = homeController;