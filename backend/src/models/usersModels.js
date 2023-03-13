const connection = require('./data/connection')
const dateHelper = require('../helpers/dateHelper')

const getAll = async () => {
        const [users] = await connection.execute('SELECT * FROM users');
        return users;
};

const create = async (user) => {
    const {email, password} = user;
    const query = 'INSERT INTO users(email, password, createDate) values (?, ?, ?)'
    const userCreated = await connection.execute(query, [email, password, dateHelper.currentDateTime()]);
    return userCreated;
}

module.exports = {
    getAll,
    create
}