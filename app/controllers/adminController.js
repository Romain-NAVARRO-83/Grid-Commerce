const dataMapper = require('../data_mapper.js');



adminController = {
    loginPage : async (req,res) => {
        res.render('./admin/login');
    },
    dashboardPage : async (req,res) => {
        try{
            const productCount = await dataMapper.countProducts();
            const depletedProductCount = await dataMapper.countDepletedProducts();
            console.log(productCount);
            res.render('./admin/dashboard',{pageType : "dashboard", productCount, depletedProductCount});
        }catch{
            next();
        }
        
    },
    productsPage : async (req,res) => {
        try{
            const products = await dataMapper.getAllProducts();
            res.render('./admin/products',{products, pageType : "products"});
        }catch{
            res.send('error')
        }
        
    }
}
module.exports = adminController;