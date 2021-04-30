const { Users } = require('../models');

const userData = [
    {
        username: 'Anakin',
        password: '123344444'
    },
    {
        username: 'John',
        password: '9844447876'
    }
]

const seedUsers = () => Users.bulkCreate(userData);
module.exports = seedUsers;