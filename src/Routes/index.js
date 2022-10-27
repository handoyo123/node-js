import userRoutes from "./userRoutes.js";
import productsRoutes from "./Products.js";
import {createUser} from "../Controller/Users.controller.js";


export const generateRoutes = (app) => {
    app.get('/users', userRoutes);
    app.post('/users', createUser);
    app.get('/products', productsRoutes);
}