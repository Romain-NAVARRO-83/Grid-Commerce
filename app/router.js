const router = require('express').Router();

const homeController = require ('./controllers/homeController');
const productController = require('./controllers/productController');
const categoryController = require('./controllers/categoryController');
const checkoutController = require('./controllers/checkoutController');

router.get('/', homeController.homePage);

// const categories = require("./")
router.get('/category/:categoryName', categoryController.categoryPage);
router.get('/product/:id', productController.productPage);
router.get('/checkout', checkoutController.checkoutPage);
module.exports = router;




