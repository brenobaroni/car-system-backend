const connection = require('./data/connection')

const getAll = async (req, res) => {
    const users = await connection.execute('SELECT * FROM users');
    return res.status(200).send(users).json();
};

module.exports = {
    getAll
}