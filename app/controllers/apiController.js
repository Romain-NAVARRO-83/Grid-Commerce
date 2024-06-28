const dataMapper = require('../data_mapper.js');
const {Op} = require("sequelize");
// const Product = require('../model/Product.js');
// const Order = require('../model/Order.js');

const {Order, Product, Customer, OrderDetail}  = require('../model/associations.js');

    apiController = {
        getOrderById : async (req, res) => {
            const orderId = req.params['id'];
            try{
                const myOrder = await Order.findByPk(orderId,{
                    include : ["customer",{association : "shipments"},{association : "orderDetail", include : "product"}]
                });
                res.send(myOrder);
            }catch{
                res.status(500).json
            }
        }
    }
module.exports = apiController;