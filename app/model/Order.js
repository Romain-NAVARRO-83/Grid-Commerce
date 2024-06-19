const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class Order extends Model {}

Order.init({
    reference: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
    },
    id_customer: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'customers', // nom de la table référencée
        key: 'id',
      },
    },
    state: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  }, {
    sequelize, // instance de Sequelize
    modelName: 'Order', // nom du modèle
    tableName: 'order', // nom de la table
    timestamps: false, // désactive les champs `createdAt` et `updatedAt`
  });
  
  module.exports = Order;
  