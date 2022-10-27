const { User } = require('../models');

const userData = [
    {
        first_name: 'Dustin',
        last_name: 'Moore',
        email: 'dustinm@skriptz.com',
        user_name: 'dm360',
        password: 'password1234'
    },
    {
        first_name: 'Toacin',
        last_name: 'Patwary',
        email: 'toacinp@skriptz.com',
        user_name: 'tp360',
        password: 'password1234'
    },
    {
        first_name: 'Skylar',
        last_name: 'Dorn',
        email: 'skylard@skriptz.com',
        user_name: 'sd360',
        password: 'password1234'
    },
    {
        first_name: 'Jake',
        last_name: 'Schmidt',
        email: 'jakes@skriptz.com',
        user_name: 'js360',
        password: 'password1234'
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;