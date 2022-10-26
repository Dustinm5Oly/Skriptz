const { User } = require('../models');

const userData = [
    {
        name: 'Dustin',
        user_name: 'dm360',
        password: 'password1234'
    },
    {
        name: 'Toacin',
        user_name: 'tp360',
        password: 'password1234'
    },
    {
        name: 'Skylar',
        user_name: 'sd360',
        password: 'password1234'
    },
    {
        name: 'Jake',
        user_name: 'js360',
        password: 'password1234'
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;