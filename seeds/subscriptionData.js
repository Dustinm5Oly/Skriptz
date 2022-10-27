const { Subscription } = require('../models');

const subscriptionData = [
    {
        name: 'Netflix',
        price: '9.99',
        due_day: '5',
        category_id: '1',
        user_id: '1'
    },
    {
        name: 'Netflix',
        price: '9.99',
        due_day: '4',
        category_id: '1',
        user_id: '3'
    },
    {
        name: 'Amazon-Prime-Video',
        price: '8.99',
        due_day: '3',
        category_id: '1',
        user_id: '1'
    },
    {
        name: 'Amazon-Prime-Video',
        price: '8.99',
        due_day: '7',
        category_id: '1',
        user_id: '2'
    },
    {
        name: 'Amazon-Prime-Video',
        price: '8.99',
        due_day: '15',
        category_id: '1',
        user_id: '3'
    },
    {
        name: 'Hulu',
        price: '7.99',
        due_day: '9',
        category_id: '1',
        user_id: '2'
    },
    {
        name: 'Hulu',
        price: '7.99',
        due_day: '23',
        category_id: '1',
        user_id: '3'
    },
    {
        name: 'Hulu',
        price: '7.99',
        due_day: '28',
        category_id: '1',
        user_id: '4'
    },
    {
        name: 'Disney-Plus',
        price: '7.99',
        due_day: '1',
        category_id: '1',
        user_id: '1'
    },
    {
        name: 'Disney-Plus',
        price: '7.99',
        due_day: '24',
        category_id: '1',
        user_id: '4'
    },
    {
        name: 'Apple-Music',
        price: '8.99',
        due_day: '15',
        category_id: '2',
        user_id: '3'
    },
    {
        name: 'Spotify',
        price: '9.99',
        due_day: '5',
        category_id: '2',
        user_id: '1'
    },
    {
        name: 'Spotify',
        price: '9.99',
        due_day: '7',
        category_id: '2',
        user_id: '2'
    },
    {
        name: 'Spotify',
        price: '9.99',
        due_day: '18',
        category_id: '2',
        user_id: '4'
    },
    {
        name: 'Amazon-Music-Unlimited',
        price: '8.99',
        due_day: '7',
        category_id: '2',
        user_id: '3'
    },
    {
        name: 'Amazon-Music-Unlimited',
        price: '8.99',
        due_day: '10',
        category_id: '2',
        user_id: '4'
    },
    {
        name: 'Tidal',
        price: '9.99',
        due_day: '10',
        category_id: '1',
        user_id: '1'
    },
    {
        name: 'Tidal',
        price: '9.99',
        due_day: '19',
        category_id: '1',
        user_id: '2'
    },
    {
        name: 'Playstation-Plus-Essential',
        price: '9.99',
        due_day: '8',
        category_id: '3',
        user_id: '2'
    },
    {
        name: 'Playstation-Plus-Essential',
        price: '9.99',
        due_day: '23',
        category_id: '3',
        user_id: '3'
    },
    {
        name: 'Xbox-Gamepass-Console',
        price: '9.99',
        due_day: '5',
        category_id: '3',
        user_id: '1'
    },
    {
        name: 'Xbox-Gamepass-Console',
        price: '9.99',
        due_day: '14',
        category_id: '3',
        user_id: '4'
    },
    {
        name: 'World-of-Warcraft',
        price: '12.99',
        due_day: '9',
        category_id: '3',
        user_id: '4'
    },
    {
        name: 'Ubisoft-Plus',
        price: '14.99',
        due_day: '3',
        category_id: '3',
        user_id: '2'
    },
    {
        name: 'Ubisoft-Plus',
        price: '14.99',
        due_day: '14',
        category_id: '3',
        user_id: '3'
    },
    {
        name: '6th-Sense-Fishing',
        price: '36.99',
        due_day: '23',
        category_id: '4',
        user_id: '1'
    },
    {
        name: 'Mimo-Coding',
        price: '6.66',
        due_day: '9',
        category_id: '4',
        user_id: '1'
    },
    {
        name: 'Mimo-Coding',
        price: '6.66',
        due_day: '7',
        category_id: '4',
        user_id: '2'
    },
    {
        name: 'Mimo-Coding',
        price: '6.66',
        due_day: '15',
        category_id: '4',
        user_id: '3'
    },
    {
        name: 'Mimo-Coding',
        price: '6.66',
        due_day: '27',
        category_id: '4',
        user_id: '4'
    },
    {
        name: 'Dollar-Shave-Club',
        price: '8.99',
        due_day: '1',
        category_id: '4',
        user_id: '3'
    },
    {
        name: 'Dollar-Shave-Club',
        price: '8.99',
        due_day: '1',
        category_id: '4',
        user_id: '4'
    },
    {
        name: 'Bark-Box',
        price: '35.00',
        due_day: '6',
        category_id: '4',
        user_id: '1'
    },
    {
        name: 'Bark-Box',
        price: '35.00',
        due_day: '17',
        category_id: '4',
        user_id: '3'
    },
    {
        name: 'Bark-Box',
        price: '35.00',
        due_day: '25',
        category_id: '4',
        user_id: '4'
    },

];

const seedSubscriptions = () => Subscription.bulkCreate(subscriptionData);

module.exports = seedSubscriptions;