// const dataMapper = require('../data_mapper.js');
const CartService = require('../services/CartService');
const DeliveryService = require('../services/DeliveryService');
const { Product, Order, OrderDetail } = require('../model/associations');
const localDate = require('../utils/dateToLocal');

checkoutController = {
    checkoutPage: async (req, res) => {
        try {

            res.render('checkout', {
                pageType: "checkout",
                csrf: req.csrfToken()
            });
        } catch (err) {
            console.log(err);
            res.send('error')
        }
    },
    addToCart: (req, res) => {
        const cartService = new CartService(req.session.cart);
        cartService.addProduct(req.body.idProduct, parseInt(req.body.quantity), req.body.productName, req.body.unitPrice);
        req.session.cart = cartService.getCart();
        res.json({ cart: req.session.cart }).end();
    },
    getCart: async (req, res) => {
        const cartService = new CartService(req.session.cart);
        res.json({ cart: req.session.cart }).end();


    },
    placeOrder: async (req, res) => {
        // console.log('mysession : ' + req.session.customerId);
        const randomNumber = parseInt(Math.random() * 1000);

        try {
            const newOrder = await Order.create(
                {
                    reference: `FrontOrder${randomNumber}`,
                    id_customer: req.session.customerId,
                    state: 1,

                }
            );
            // Créer une instance du service de livraison
            const deliveryService = new DeliveryService(newOrder.date_creation);
            const estimatedDeliveryDate = deliveryService.computeEstimatedDeliveryDate();
            const orderData = {
                reference: newOrder.reference,
                date: localDate(newOrder.date_creation),
                deliveryDate: estimatedDeliveryDate,
                orderDetails: []
            }
            const newOrderId = newOrder.id;
            req.session.cart.forEach(cartLine => {
                const orderDetail = OrderDetail.create({
                    id_order: newOrderId,
                    id_product: cartLine.productId,
                    quantity: cartLine.quantity,
                    unit_price: cartLine.unitPrice

                });
                orderData.orderDetails.push({
                    id_product: cartLine.productId,
                    quantity: cartLine.quantity,
                    unit_price: cartLine.unitPrice
                })
            });

            res.render('orderConfirmation', {
                pageType: "orderConfirmation",
                orderData: orderData
            });
        } catch (e) {
            res.status(501).send("error" + e);
        }

    }

}
module.exports = checkoutController