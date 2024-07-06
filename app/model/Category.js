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
    },
    text_top : {
        type:DataTypes.TEXT
    },
    text_bottom : {
        type:DataTypes.TEXT
    }
},{
    sequelize,
    tableName : 'category',
    timestamps: false
});
module.exports = Category;