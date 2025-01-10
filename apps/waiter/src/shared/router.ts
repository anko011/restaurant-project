export const routePaths = {
    root: '/',
    home() {
        return this.root;
    },
    orders() {
        return this.root;
    },
    tables() {
        return this.root.concat('recipes/')
    },
    bookings() {
        return this.root.concat('ingredients/')
    },
    signIn() {
        return "/sign-in";
    },
    logout() {
        return "/logout";
    }

}