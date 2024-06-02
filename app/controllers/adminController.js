const dataMapper = require('../data_mapper.js');

adminController = {
    loginPage : async (req,res) => {
        res.render('./admin/login');
    },
    dashboardPage : async (req,res) => {
        res.render('./admin/dashboard');
    },
    productsPage : async (req,res) => {
        res.render('./admin/products');
    }
}
module.exports = adminController;