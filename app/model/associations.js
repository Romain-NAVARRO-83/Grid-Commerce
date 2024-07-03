const Customer = require("./Customer.js");
const Order = require("./Order.js");
const OrderDetail = require("./OrderDetail.js");
const Product = require("./Product.js");
const Shipment = require("./Shipment.js");
const Category = require("./Category.js");

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
// Product <-> Tag (Many-to-Many)
// const categoryProducts = sequelize.define('notes_tags', {

// }, {
//   timestamps: false
// })
Product.belongsToMany(Category, {
  through: "category_product", // nom de la table de liaison
  foreignKey: "id_category", // nom de la clé étrangère dans la table SOURCE
  as: "categories",
  timestamps : false
});
Category.belongsToMany(Product, {
  through: "category_product",
  foreignKey: "id_product",
  as: "products",
  timestamps : false
});

  module.exports = {Customer, Order, Product, OrderDetail, Shipment, Category}