const { Category } = require('../models');

const categoryData = [
    // {
    //     name: 'Dustin',
    //     user_name: 'dm360',
    //     password: 'password1234'
    // },
    // {
    //     name: 'Toacin',
    //     user_name: 'tp360',
    //     password: 'password1234'
    // },
    // {
    //     name: 'Skylar',
    //     user_name: 'tp360',
    //     password: 'password1234'
    // },
    // {
    //     name: 'Toacin',
    //     user_name: 'tp360',
    //     password: 'password1234'
    // },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;