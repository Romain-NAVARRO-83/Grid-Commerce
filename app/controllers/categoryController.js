const dataMapper = require('../data_mapper.js');


categoryController = {
  categoryPage : async (req,res)=>{
    const categoryName = req.params['categoryName'];
    try{
      const categories = await dataMapper.getAllCategories();
      const category = categories.find((category)=> category.name.replace(" ","-") === categoryName );
      const products = await dataMapper.getCategoryProducts(category.id);
      
      console.log(products);
      res.render('category',{
        category : category,
        categories : categories,
        products : products,
        pageType : category
    })}catch(error){
      console.error(error);
      res.send("error");
    }
  }
}

  module.exports = categoryController;