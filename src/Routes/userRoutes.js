import Router from "../utils/Router.js";
import {getUsers, createUser} from "../Controller/Users.controller.js";

Router.get('/users', getUsers)
Router.put('/users/create', createUser)

export default  Router