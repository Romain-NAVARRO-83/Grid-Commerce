const dataMapper = require('../data_mapper.js');

const Product = require('../model/Product.js');



adminController = {
    loginPage : async (req,res) => {
        res.render('./admin/login');
    },
    dashboardPage : async (req,res) => {
        try{
            // const productCount = await dataMapper.countProducts();
            const productCount = await Product.count();
            const depletedProductCount = await dataMapper.countDepletedProducts();
            const orders = await dataMapper.getOrdersByWeek();
            const customersOrders = await dataMapper.getBestCustomers();
            const categoryProducts = await dataMapper.getCategoriesProductCount();
            res.render('./admin/dashboard',{pageType : "dashboard", productCount, depletedProductCount, orders, customersOrders,categoryProducts});
        }catch(error){
            console.log(error);
            res.send(error);
            
        }
        
    },
    productsPage : async (req,res) => {
        try{
            const products = await dataMapper.getAllProducts();
            const bestSellers = await dataMapper.getBestSellers(5);
            res.render('./admin/products',{products, pageType : "products", bestSellers});
        }catch{
            res.send('error')
        }
        
    },productPage: async (req,res) => {
        try{
            res.send('EJS not made yet')
        }catch(err){
            console.log(error);
            res.send('error')
        }
    },
    ordersPage : async (req,res) => {
        try{
            const orders = await dataMapper.getOrders(15,20);
            res.render('./admin/orders',{orders, pageType : "orders", orders});
        }catch(error){
            
            console.log(error);
            res.send('error')
        }
        
    },
    orderPage: async (req,res) => {
        try{
            res.send('EJS not made yet')
        }catch(err){
            console.log(error);
            res.send('error')
        }
    },
    customersPage : async (req,res) => {
        try{
            const customers = await dataMapper.getCustomers();
            res.render('./admin/customers',{customers, pageType : "customers"});
        }catch(error){
            console.log(error);
            res.send('error')
        }
        
    }
}
module.exports = adminController;