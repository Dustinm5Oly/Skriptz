const User = require('./Users');
const Subscription = require('./Subscriptions');
const Category = require('./Categories');

Category.hasMany(Subscription, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Subscription.belongsTo(Category,{
    foreignKey: 'category_id'
});
User.hasMany(Subscription, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Subscription.belongsTo(User,{
    foreignKey: 'user_id'
});


module.exports = { User, Subscription, Category };