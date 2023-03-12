const userModels = require('../models/usersModels');

const getAll = (req, res) => {
    return userModels.getAll(req, res);
}

module.exports = {
    getAll
}