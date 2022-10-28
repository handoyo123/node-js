import {Sequelize} from "sequelize";
import db from "../configs/Database.js";
import moment from "moment";

const {DataTypes} = Sequelize;
const Users = db.define('user', {
    id: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('id');
        },
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('type');
        }
    },
    email: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('email');
        }
    },
    type: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('type');
        }
    },
    avatar: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('avatar');
        }
    },
    lang: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('lang');
        }
    },
    created_by: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('created_by');
        }
    },
    createdAt: {type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('d-m-Y hh:mm:ss');
    }},

}, {
    freezeTableName: true,
    timestamps: false
});

export default Users;