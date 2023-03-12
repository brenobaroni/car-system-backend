
const userService = require('../services/userService');

const getAll = async (req, res) => {

  //Validations here.
    //return res.status(200).json({message: 'OK'});
    const users = await userService.getAll(req, res);
    return users;
};

const create = async (req, res) => {
    const user = await userService.create(req, res);
    return user;
};


module.exports = {
    getAll,
    create
}