const { Subscription } = require('../models');

const subscriptionData = [
//     {
//         name: 'Dustin',
//         user_name: 'dm360',
//         password: 'password1234'
//     },
//     {
//         name: 'Toacin',
//         user_name: 'tp360',
//         password: 'password1234'
//     },
//     {
//         name: 'Skylar',
//         user_name: 'tp360',
//         password: 'password1234'
//     },
//     {
//         name: 'Toacin',
//         user_name: 'tp360',
//         password: 'password1234'
//     },

];

const seedSubscriptions = () => Subscription.bulkCreate(subscriptionData);

module.exports = seedSubscriptions;