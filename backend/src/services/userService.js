const userModels = require('../models/usersModels');

const getAll = async (req) => {
    const users = await userModels.getAll(req);
    return users;
}

const create = async (req) => {
    console.log(req.body)
    const createdUser = await userModels.create(req.body);
    return createdUser;
};

module.exports = {
    getAll,
    create
}