const db = require('../database/dbConfig.js');
const bcrypt = require('bcryptjs');

function findBy(username){
    return db('users').where({ username }).select('id', 'username', 'password')
}

module.exports = {
    findBy,
};
