
const userService = require('../services/userService');

const getAll = async (req, res) => {
    
  //Validations here.

  return userService.getAll(req, res);
};


module.exports = {
    getAll
}