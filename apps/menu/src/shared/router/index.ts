export const routePaths = {
    root: '/',
    home() {
        return this.root;
    },
    cart() {
        return this.root.concat('cart/');
    },
    orders() {
        return this.root.concat('orders/');
    }
}