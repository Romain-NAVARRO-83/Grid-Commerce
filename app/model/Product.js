const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class Product extends Model {}

Product.init({
    name: {
      type: DataTypes.TEXT
    },
    reference: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description_short: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT
      },
      picture_url: {
        type: DataTypes.TEXT
      },
      stock: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
  }, {
    sequelize, // instance de Sequelize
    modelName: 'Product', // nom du modèle
    tableName: 'product', // nom de la table
    timestamps: false, // désactive les champs `createdAt` et `updatedAt`
  });
  
  module.exports = Product;
  