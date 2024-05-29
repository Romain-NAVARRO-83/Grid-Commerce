const dataMapper = require('../data_mapper.js');
productController = {
    productPage : async (req,res)=>{
        const productId = parseInt(req.params['id']);
        try{
            const categories = await dataMapper.getAllCategories();
            const product = await dataMapper.getProductById(productId);

            res.render('product',{
                product : product,
                categories : categories
            });
        }catch(err){
            console.log(err);
            res.send('error')
        }
    }
}
module.exports = productController