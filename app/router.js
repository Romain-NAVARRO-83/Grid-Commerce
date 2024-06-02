const router = require('express').Router();

const homeController = require ('./controllers/homeController');
const productController = require('./controllers/productController');
const categoryController = require('./controllers/categoryController');
const checkoutController = require('./controllers/checkoutController');
const adminController = require('./controllers/adminController');

router.get('/', homeController.homePage);

// const categories = require("./")
router.get('/category/:categoryName', categoryController.categoryPage);
router.get('/product/:id', productController.productPage);
router.get('/checkout', checkoutController.checkoutPage);

router.post('/add-to-cart', checkoutController.addToCart)


// Admin routes
// credentials checking
router.use('/admin/*',(req,res,next)=>{
    // req.session.adminCredentials = true;
    if (req.session.adminCredentials === true){
        console.log(req.originalUrl);
        console.log('Admin credentials OK');
        console.log(req.session.adminCredentials);
        // next();
    }else if (req.originalUrl != '/admin/login'){
        console.log(req.originalUrl);
        res.redirect('/admin/login');
    
    // next();
    }
    next();
    
})
router.get('/admin/login', adminController.loginPage);
router.get('/admin/dashboard', adminController.dashboardPage);
router.get('/admin/products', adminController.productsPage);












module.exports = router;




