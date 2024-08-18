const router = require('express').Router();
const dataMapper = require('./data_mapper.js');
// CSRF protection middleware
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const homeController = require('./controllers/homeController');
const productController = require('./controllers/productController');
const categoryController = require('./controllers/categoryController');
const checkoutController = require('./controllers/checkoutController');
const customerController = require('./controllers/customerController');
const adminController = require('./controllers/adminController');
const apiController = require('./controllers/apiController');
const getCategoriesMiddleware = require('./middlewares/getCategoriesMiddleware.js')

// router.use(checkoutController.logCart);
router.get('/', homeController.homePage);

// const categories = require("./")
router.get('/category/:id', getCategoriesMiddleware.frontCategories, categoryController.categoryPage);
router.get('/product/:id', productController.productPage);
router.get('/login', csrfProtection, customerController.loginPage);
router.post('/login', csrfProtection, customerController.loginAttempt);
router.post('/signup', csrfProtection, customerController.signUp);
router.get('/checkout', checkoutController.checkoutPage);

router.get('/cart', checkoutController.getCart);
router.post('/cart', checkoutController.addToCart);


// Admin routes
// Base redirection
router.get('/admin', (req, res, next) => {
    if (req.session.adminCredentials === true) {

        res.redirect('/admin/dashboard');

    } else if (req.originalUrl != '/admin/login') {
        // console.log(req.originalUrl);
        res.redirect('/admin/login');


    }
    next();
});
// credentials checking
router.get('/admin/*', (req, res, next) => {
    // if (req.session.adminCredentials === true){

    // }else if (req.originalUrl != '/admin/login'){
    //     console.log(req.originalUrl);
    //     res.redirect('/admin/login');


    // }
    next();
})
router.post('/admin/login', (req, res, next) => {
    req.session.adminCredentials = true;
    res.cookie('adminCredentials', true);
    res.redirect('/admin/dashboard');
    // next();
});
router.get('/admin/logout', (req, res, next) => {
    req.session.adminCredentials = false;
    res.redirect('/admin/login');
})
router.get('/admin/login', adminController.loginPage);
router.get('/admin/dashboard', adminController.dashboardPage);
router.get('/admin/products', adminController.productsPage);
router.get('/admin/products/:id', adminController.productPage);
router.get('/admin/orders', adminController.ordersPage);
router.get('/admin/orders/:id', adminController.orderPage);
router.get('/admin/customers', adminController.customersPage);
router.post('/api/sendShipment', adminController.sendShipment);

// API routes
router.get('/api/orders/:id', apiController.getOrderById);












module.exports = router;




