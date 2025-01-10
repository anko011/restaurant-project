export const routePaths = {
    root: '/',
    home() {
        return this.root;
    },
    orders() {
        return this.root;
    },
    ingredients() {
        return this.root.concat('ingredients/')
    },
    recipes() {
        return this.root.concat('recipes/')
    },
    signIn() {
        return "/sign-in";
    },
    logout() {
        return "/logout";
    }

}