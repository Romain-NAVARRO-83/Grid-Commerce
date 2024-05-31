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
    },
    addToCart : (req, res)=>{
        req.session.cart.push({productId : req.body.idProduct, quantity : 1,productName : req.body.productName, unitPrice : req.body.unitPrice});
        // req.session.cart = ["test"];
        // console.log("added" + req.body.idProduct + " session " + req.session.cart);
        // 
        res.send("added to cart");
    }
}
module.exports = checkoutController