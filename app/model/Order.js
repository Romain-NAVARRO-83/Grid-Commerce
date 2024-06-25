const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");
const dayjs= require('dayjs')

class Order extends Model {
  
  get date() {
    return this.date_creation ? dayjs(this.date_creation).format('YYYY MM DD') : 'Invalid Date';
  }
}

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
    updatedAt : false
  });
  
  module.exports = Order;
  