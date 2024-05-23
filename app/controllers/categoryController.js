const client = require('../sql_client.js'); 
let categories = {};
client.query('SELECT * FROM categories').then((data)=>{categories = data.rows});
function categoryPage(req, res) {
    const categoryName = req.params['categoryName'];
    const category = categories.find((category)=> category.name.replace(" ","-") === categoryName )
    res.render('category',{
      category : category,
      categories : categories
    });
  }
  
  // On met à disposition ces fonctions au routeur
  module.exports = {
    categoryPage
  };