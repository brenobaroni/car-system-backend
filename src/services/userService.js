const userModels = require('../models/usersModels');

const getAll = async (req, res) => {
    const users = await userModels.getAll(req);
    return res.status(200).json({
        success: true,
        status: 200,
        message: "",
        data: users,
    });
}

const create = async (req ,res) => {
    const createdUser = await userModels.create(req.body);
    return res.status(200).json({
        success: true,
        status: 200,
        message: "",
        data: createdUser,
    });
};

module.exports = {
    getAll,
    create
}