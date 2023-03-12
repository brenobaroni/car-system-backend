const userModels = require('../models/usersModels');

const getAll = async (req, res) => {
    await userModels.getAll(req, res).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(400).json(err);
    });
}

const create = async (req, res) => {
    await userModels.create(req.body).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(400).json(err);
    });
};

module.exports = {
    getAll,
    create
}