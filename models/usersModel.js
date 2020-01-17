const db = require('../database/dbConfig.js');

function getUsers(){
    return db('users').select('id', 'username');
}

module.exports ={
    getUsers,
};