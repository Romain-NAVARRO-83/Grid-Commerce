// const dataMapper = require('../data_mapper.js');
const Product = require('../model/Product');
checkoutController = {
    checkoutPage: async (req, res) => {
        // const checkoutId = parseInt(req.params['id']);
        try {
            // const categories = await dataMapper.getAllCategories();
            // const checkout = await dataMapper.getcheckoutById(checkoutId);

            res.render('checkout', {
                pageType: "checkout"
            });
        } catch (err) {
            console.log(err);
            res.send('error')
        }
    },
    addToCart: (req, res) => {
        const cart = req.session.cart;
        const productId = req.body.idProduct;
        const quantity = parseInt(req.body.quantity);
        const productName = req.body.productName;
        const unitPrice = req.body.unitPrice;
        console.log(cart);
        // if (cart.length > 0){
        const cartIndex = cart.findIndex(product => product.productId === productId);
        console.log(`already index : ${cartIndex}`);
        if (cartIndex > -1) {
            req.session.cart[cartIndex].quantity += quantity;
        } else {
            req.session.cart.push({
                productId: productId,
                quantity: quantity,
                productName: productName,
                unitPrice: unitPrice
            });
        }



        // const alreadyInCart = cart.findIndex(cartLine => cartLine.productId == productId);
        // console.log(`already : ${alreadyInCart}`);
        // if(alreadyInCart.length > 0){

        //     cart.forEach(element => {
        //         if (element.productId === productId){
        //             element.quantity += quantity;
        //         }
        //     });
        // }
        // }



        // req.session.cart = ["test"];
        // console.log("added" + req.body.idProduct + " session " + JSON.stringify(req.session.cart));
        // return("added" + req.body.idProduct);
        res.json({ cart: req.session.cart }).end();
        // 
        // res.send("added to cart");
    },
    getCart: async (req, res) => {

        res.json({ cart: req.session.cart }).end();


    },
    // logCart : (req,res,next)=>{
    //     // console.log("Current cart : " + JSON.stringify(req.session.cart));
    //     next();
    // }
}
module.exports = checkoutController