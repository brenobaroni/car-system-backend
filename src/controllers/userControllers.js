
const { response } = require('../router');
const userService = require('../services/userService');

const getAll = async (req, res, next) => {
    try {
        return await userService.getAll(req, res);
    } catch (error) {
        res = res.status(400);
        next(error, req, res);
    }
};

const create = async (req, res, next) => {
    try {
        return await userService.create(req, res);
    } catch (error) {
        error.statusCode = 400;
        next(error, req, res);
    }
};


module.exports = {
    getAll,
    create
}