import {Sequelize} from "sequelize";
import db from "../configs/Database.js";

const {DataTypes} = Sequelize;
const Users = db.define('users', {
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    lang: {type: DataTypes.STRING},
    created_by: {type: DataTypes.STRING},
    created_at: {type: DataTypes.STRING}
}, {
    freezeTableName: true,
    timestamps: false
});

export default Users;