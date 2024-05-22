const router = require('express').Router();

const homeController = require ('./controllers/homeController');
const productController = require('./controllers/productController');
const categoryController = require('./controllers/categoryController');
// const checkoutController = require('./controllers/checkoutController');

router.get('/', homeController.index);
router.get('/category/:idCategory', categoryController.categoryPage);
// router.get('/checkout', categoryController.categoryList);
module.exports = router;