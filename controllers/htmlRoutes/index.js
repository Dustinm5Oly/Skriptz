const router = require("express").Router();
const {User, Subscription, Category} = require("../../models");
// import { format, subDays } from 'date-fns';
// const addDays = require('date-fns/add_days');
const {addDays, format} = require('date-fns');

// for end point '/'
router.get("/", (req, res) => {
    res.render("homepage", {layout: "home"})
})

router.get("/add_service", (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/');
    }
    res.render("add_service", {userFirstName: req.session.user_name});
})

router.get("/current_services", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/');
    }
    try {
        const userSkriptz = await User.findOne({
            where: {
                id: req.session.user_id
            },
            include: [{model: Subscription,
                order: [["category_id", "DESC"]],
                include: [{model: Category}]
            }],
            order: [[{model: Subscription, as:"subscriptions"}, "category_id", "ASC"]],
        })
        if (!userSkriptz) return res.status(404).json("couldn't find user subscriptions");
        const userInfo = userSkriptz.get({plain: true})
        res.render("current_services", {userInfo, userFirstName: req.session.user_name});
    } catch (err) {
        res.status(500).json("could not retrieve user subscription")
    }
})

router.get("/due", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/');
    }
    try {
        // let oneWeek = format(date, "YYYY");
        let today = new Date();
        let oneWeekfromToday = addDays(today, 7);
        todayDay = format(today, "D"); // returns 31
        if(todayDay >= 20) {
            oneWeekDay = parseInt(todayDay) + 7;
        } else {
            oneWeekDay = format(oneWeekfromToday, "D"); // returns 7
        }
        console.log(oneWeekDay);
        console.log(todayDay);
        const userSkriptz = await User.findOne({
            where: {
                id: req.session.user_id
            },
            include: [{model: Subscription,
                include: [{model: Category}]
            }]
        })
        if (!userSkriptz) return res.status(404).json("couldn't find user subscriptions");
        const userInfo = userSkriptz.get({plain: true});
        let subscriptionsDue = userInfo.subscriptions.filter((element)=> element.due_day>=todayDay && element.due_day<=oneWeekDay);
        // console.log(userInfo.subscriptions);
        console.log(subscriptionsDue);
        res.render("due", {subscriptionsDue, userFirstName: req.session.user_name});
    } catch (err) {
        throw err
        res.status(500).json(err)
    }
})

router.get("/profile", (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/');
    }
    res.render("profile", {userFirstName: req.session.user_name})
})

module.exports = router;