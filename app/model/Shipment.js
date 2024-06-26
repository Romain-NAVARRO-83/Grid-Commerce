const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class Shipment extends Model {

}

Shipment.init({
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize, 
    modelName: 'Shipment', // nom du modèle
    tableName: 'shipment', // nom de la table
    updatedAt : false
  });
  
  module.exports = Shipment;
  