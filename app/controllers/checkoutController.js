const dataMapper = require('../data_mapper.js');
checkoutController = {
    checkoutPage : async (req,res)=>{
        // const checkoutId = parseInt(req.params['id']);
        try{
            // const categories = await dataMapper.getAllCategories();
            // const checkout = await dataMapper.getcheckoutById(checkoutId);

            res.render('checkout',{
                pageType : "checkout"
            });
        }catch(err){
            console.log(err);
            res.send('error')
        }
    }
}
module.exports = checkoutController