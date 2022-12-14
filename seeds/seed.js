const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedCategories = require('./categoryData');
const seedSubscriptions = require('./subscriptionData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedCategories();

  await seedSubscriptions();

  process.exit(0);
};

seedAll();