const dataMapper = require('../data_mapper.js');
productController = {
    productPage : async (req,res,next)=>{
        const productId = parseInt(req.params['id']);
        try{
            const categories = await dataMapper.getAllCategories();
            const product = await dataMapper.getProductById(productId);

            res.render('product',{
                product : product,
                categories : categories,
                pageType : "product"
            });
        }catch(err){
            console.log(err);
            next();
        }
    }
}
module.exports = productController