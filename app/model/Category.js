const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class Category extends Model {
}

Category.init({
    name : {
        type:DataTypes.TEXT,
        allowNull: false
    },
    depth : {
        type:DataTypes.SMALLINT,
        allowNull: false,
        default : 0
    }
},{
    sequelize,
    tableName : 'category',
    timestamps: false
});
module.exports = Category;