const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class Customer extends Model {}

Customer.init({
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
      },
  }, {
    sequelize, // instance de Sequelize
    modelName: 'Customer', // nom du modèle
    tableName: 'customer', // nom de la table
    timestamps: false, // désactive les champs `createdAt` et `updatedAt`
  });
  
  module.exports = Customer;
  