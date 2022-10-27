import Router from "../utils/Router.js";
import {getProducts} from "../controller/Products.controller.js";

const productsRoutes = Router.get('/products', getProducts)

export default productsRoutes