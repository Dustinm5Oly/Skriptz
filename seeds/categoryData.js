const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'TV/Movie'
    },
    {
        category_name: 'Music'
    },
    {
        category_name: 'Gaming'
    },
    {
        category_name: 'Personal'
    },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;