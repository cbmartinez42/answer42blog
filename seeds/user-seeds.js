const { Users } = require('../models');

const userData = [
    {
        first_name: 'Joe',
        last_name: 'Schmoe',
        username: 'Anakin',
        password: '123344444'
    },
    {
        first_name: 'Wiggle',
        last_name: 'Womp',
        username: 'John',
        password: '9844447876'
    },
    {
        first_name: 'Wompus',
        last_name: 'Wiggly',
        username: 'wompusmaximus',
        password: '984121346'
    },
    {
        first_name: 'Shanty',
        last_name: 'sea',
        username: 'seashanty',
        password: '52454651'
    }
]

const seedUsers = () => Users.bulkCreate(userData);
module.exports = seedUsers;