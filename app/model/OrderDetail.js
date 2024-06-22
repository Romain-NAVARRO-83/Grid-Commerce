const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class OrderDetail extends Model {}

OrderDetail.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit_price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
  }, {
    sequelize, // instance de Sequelize
    modelName: 'OrderDetail', // nom du modèle
    tableName: 'order_detail', // nom de la table
    timestamps: false, // désactive les champs `createdAt` et `updatedAt`
  });
  
  module.exports = OrderDetail;
  