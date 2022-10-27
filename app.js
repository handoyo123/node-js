import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import xss from 'x-xss-protection'
import dotenv from 'dotenv'
dotenv.config()
import {generateRoutes} from "./src/Routes/index.js";
import * as mysql from "mysql2";

const app = express();
const port = process.env.PORT;

express.application.prefix = express.Router.prefix = function (path, configure) {
    const router = express.Router();
    this.use(path, router);
    configure(router);
    return router;
};

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(xss())
app.use(cors())

app.listen(port, () => {
    const con = mysql.createConnection({
        host: `${process.env.DB_HOST}`,
        user: `${process.env.DB_USERNAME}`,
        password: `${process.env.DB_PASSWORD}`,
    });

    con.connect(function(err) {
        if (err) console.log('cannot connect database!');
        console.log(`cli-nodejs-api listening at http://localhost:${port}`)
    });
});

generateRoutes(app)