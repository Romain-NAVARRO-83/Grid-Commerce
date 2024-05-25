// const client = require('../sql_client.js'); 
const dataMapper = require('../data_mapper.js');


categoryController = {
  categoryPage : async (req,res)=>{
    const categoryName = req.params['categoryName'];
    try{
      const categories = await dataMapper.getAllCategories();
      // console.log(categories);
      const category = categories.find((category)=> category.name.replace(" ","-") === categoryName );
      res.render('category',{
        category : category,
        categories : categories
    })}catch(error){
      console.error(error);
      res.send("error");
    }
  }
}

  module.exports = categoryController;