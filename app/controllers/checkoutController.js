// const dataMapper = require('../data_mapper.js');
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
        console.log("req.body" + JSON.stringify(req.body));
        req.session.cart.push({
            productId : req.body.idProduct,
             quantity : req.body.quantity,
             productName : req.body.productName,
              unitPrice : req.body.unitPrice});
        // req.session.cart = ["test"];
        console.log("added" + req.body.idProduct + " session " + JSON.stringify(req.session.cart));
        // return("added" + req.body.idProduct);
        res.json({cart : req.session.cart}).end();
        // 
        // res.send("added to cart");
    },
    getCart :  (req,res)=>{
        res.json({cart : req.session.cart}).end();
    },
    // logCart : (req,res,next)=>{
    //     // console.log("Current cart : " + JSON.stringify(req.session.cart));
    //     next();
    // }
}
module.exports = checkoutController