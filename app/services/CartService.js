class CartService {
    constructor(cart) {
        this.cart = cart || [];
    }

    addProduct(productId, quantity, productName, unitPrice) {
        const cartIndex = this.cart.findIndex(product => product.productId === productId);
        if (cartIndex > -1) {
            this.cart[cartIndex].quantity += quantity;
        } else {
            this.cart.push({
                productId: productId,
                quantity: quantity,
                productName: productName,
                unitPrice: unitPrice
            });
        }
    }

    getCart() {
        return this.cart;
    }
}

module.exports = CartService;