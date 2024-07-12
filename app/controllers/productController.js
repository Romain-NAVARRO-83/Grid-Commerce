// const dataMapper = require('../data_mapper.js');
const {Product} = require('../model/associations.js');
productController = {
    productPage : async (req,res,next)=>{
        const productId = parseInt(req.params['id']);
        try{
            // const categories = await dataMapper.getAllCategories();
            // const product = await dataMapper.getProductById(productId);
            const product = await Product.findByPk(productId);

            res.render('product',{
                product : product,
                pageType : "product"
            });
        }catch(err){
            console.log(err);
            next();
        }
    }
}
module.exports = productController