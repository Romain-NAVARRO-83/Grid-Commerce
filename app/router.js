const router = require('express').Router();

const homeController = require ('./controllers/homeController');
const productController = require('./controllers/productController');
const categoryController = require('./controllers/categoryController');
const checkoutController = require('./controllers/checkoutController');
const customerController = require('./controllers/customerController');
const adminController = require('./controllers/adminController');

router.get('/', homeController.homePage);

// const categories = require("./")
router.get('/category/:categoryName', categoryController.categoryPage);
router.get('/product/:id', productController.productPage);
router.get('/login', customerController.loginPage);
router.post('/login', customerController.loginAttempt);
router.post('/signup', customerController.signUp);
router.get('/checkout', checkoutController.checkoutPage);

router.post('/add-to-cart', checkoutController.addToCart)


// Admin routes
// Base redirection
router.get('/admin',(req,res,next)=>{
    if (req.session.adminCredentials === true){
        // console.log(req.originalUrl);
        // console.log('Admin credentials OK');
        // console.log(req.session.adminCredentials);
        res.redirect('/admin/dashboard');

    }else if (req.originalUrl != '/admin/login'){
        console.log(req.originalUrl);
        res.redirect('/admin/login');
   

    }
    next();
});
// credentials checking
router.get('/admin/*',(req,res,next)=>{
    if (req.session.adminCredentials === true){
        console.log(req.originalUrl);
        console.log('Admin credentials OK');
        console.log(req.session.adminCredentials);

    }else if (req.originalUrl != '/admin/login'){
        console.log(req.originalUrl);
        res.redirect('/admin/login');
   

    }
    next();
})
router.post('/admin/login',(req,res,next)=>{
    req.session.adminCredentials = true;
    res.cookie('adminCredentials',true);
    res.redirect('/admin/dashboard');
    // next();
});
router.get('/admin/logout',(req,res,next)=>{
    req.session.adminCredentials = false;
    res.redirect('/admin/login');
})
router.get('/admin/login', adminController.loginPage);
router.get('/admin/dashboard', adminController.dashboardPage);
router.get('/admin/products', adminController.productsPage);
router.get('/admin/orders', adminController.ordersPage);
router.get('/admin/customers', adminController.customersPage);












module.exports = router;




