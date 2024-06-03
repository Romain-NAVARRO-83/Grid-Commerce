// app.set('view engine', 'ejs');
// app.set('views', 'app/views');
// const queries = require("../queries");
// const pg = require('pg');
//   const { Client } = pg

// const client = new Client({
//   user: 'appsqluser',
//   password: '$$endeLL8',
//   host: 'localhost',
//   // port: 5334,
//   database: 'gridcommerce',
// });
// client.connect();
// const client = require('../sql_client.js'); 
const dataMapper = require('../data_mapper.js');
// function index(req, res) {
//   client.query('SELECT * FROM categories').then((data)=>{
//     res.render('home',{
//       categories : data.rows,
//       pageTitle : "Home",
//     });
//   }).catch((error)=>{
//     console.log(error);
//     return("error");
//   }) ;

//  }

homeController = {
  homePage: async (req, res) => {
    try {
      const categories = await dataMapper.getAllCategories();
      res.render('home', {
        categories: categories,
        pageTitle: "Home",
        cart: req.session.cart
      });
    } catch {
      console.error(error);
      res.send("error");
    }
  }
}

// On met à disposition ces fonctions au routeur
module.exports = homeController;