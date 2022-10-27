import {Sequelize} from "sequelize";

import db from "../Configs/Database.js";

const {DataTypes} = Sequelize;

const Products = db.define('product_services', {
    id:{type: DataTypes.STRING, primaryKey:true},
    name: {type: DataTypes.STRING},
    sku: {type: DataTypes.STRING},
    sale_price: {type: DataTypes.STRING},
    purchase_price: {type: DataTypes.STRING},
    quantity: {type: DataTypes.STRING},
    tax_id: {type: DataTypes.STRING},
    category_id: {type: DataTypes.STRING},
    unit_id: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    created_by: {type: DataTypes.STRING},
    created_at: {type: DataTypes.STRING},
    updated_at: {type: DataTypes.STRING}
}, {
    freezeTableName: true,
    timestamps: false
});

export default Products;