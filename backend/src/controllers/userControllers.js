
const { response } = require('../router');
const userService = require('../services/userService');

const getAll = async (req, res, next) => {
    try {
        const users = await userService.getAll(req, res)
        return res.status(200).json({
            success: false,
            status: 200,
            message: "",
            data: users,
        });
        
    } catch (error) {
        error.statusCode = 400;
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const user = await userService.create(req, res);
        return res.status(201).json({
            success: false,
            status: 200,
            message: "",
            data: user
        });
    } catch (error) {
        error.statusCode = 400;
        next(error);
    }
};


module.exports = {
    getAll,
    create
}