const Customer = require("./Customer.js");
const Order = require("./Order.js");
const OrderDetail = require("./OrderDetail.js");
const Product = require("./Product.js");
const Shipment = require("./Shipment.js");

// Customer <-> Answer (One-To-Many)
Customer.hasMany(Order, {
    foreignKey: "id_customer",
    as: "orders"
  });
  Order.belongsTo(Customer, {
    foreignKey: "id_customer",
    as: "customer"
  });
  

  // Order <-> OrderDetail (One-To-Many)
  Order.hasMany(OrderDetail,{
    foreignKey : "id_order",
    as : "orderDetail"
  });
  OrderDetail.belongsTo(Order,{
    foreignKey : "id_order",
    as : "order"
  });
  // Product <-> OrderDetail (One-To-Many)
  Product.hasMany(OrderDetail,{
    foreignKey : "id_product",
    as : "orderDetail"
  });
  OrderDetail.belongsTo(Product,{
    foreignKey : "id_product",
    as : "product"
  });
  // Order <-> Answer (One-To-Many)
Order.hasMany(Shipment, {
  foreignKey: "id_order",
  as: "shipments"
});
Shipment.belongsTo(Order, {
  foreignKey: "id_order",
  as: "order"
});

  module.exports = {Customer, Order, Product, OrderDetail, Shipment}