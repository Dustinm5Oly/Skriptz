const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subscription extends Model {}

Subscription.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    due_day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            max: 31,
            min: 1,
        },
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        reference: {
            model: 'category',
            key: 'id',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'user',
            key: 'id',
        },
    },
    subscription_username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password_hint: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'subscription',
    }
);

module.exports = Subscription;