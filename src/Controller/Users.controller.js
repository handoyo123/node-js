import Users from "../Models/Users.model.js";
import {Op} from "sequelize";
import {DATA_IS_FOUND,SUCCESS} from "../Const/const.js";

export const getUsers = async (req, res) => {
    try {
        const id = req.query.id;
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 0;
        const search = req.query.search_query || "";
        const offset = limit * page;
        const totalRows = await Users.count({
            where:{
                id :id,
                [Op.or]: [{name:{
                        [Op.like]: '%'+search+'%'
                    }}, {email:{
                        [Op.like]: '%'+search+'%'
                    }}]
            }
        });
        const totalPage = Math.ceil(totalRows / limit);
        const field = req.query.field;
        const sort = req.query.sort;
        const users = await Users.findAll({
                where:{
                    id :id,
                    [Op.or]: [{name:{
                            [Op.like]: '%'+search+'%'
                        }}, {email:{
                            [Op.like]: '%'+search+'%'
                        }}]
                },
                offset: offset,
                limit: limit,
                order:[
                    [field??'id', sort??'DESC']
                ]
        });
        res.json({
            status: SUCCESS,
            message : DATA_IS_FOUND,
            result: {
                data: users,
                page: page,
                limit: limit,
                totalRows: totalRows,
                totalPage: totalPage
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const createUser = async(req, res) =>{
    try {
        await Users.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}