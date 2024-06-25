const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   database: process.env.DATABASE,
//   user: 'gridcommerce',
//   password: process.env.PASSWORD,
//   host: 'localhost',
// });
const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING,{
  define: {createdAt: "date_creation"}
});
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();
module.exports = sequelize;