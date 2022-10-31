const router = require("express").Router();
const {User, Subscription, Category} = require("../../models");
// import { format, subDays } from 'date-fns';

// for end point '/'
router.get("/", (req, res) => {
    res.render("homepage", {layout: "home"})
})

router.get("/add_service", (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/');
    }
    res.render("add_service");
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
            }]
        })
        if (!userSkriptz) return res.status(404).json("couldn't find user subscriptions");
        const userInfo = userSkriptz.get({plain: true})
        res.render("current_services", {userInfo});
    } catch (err) {
        res.status(500).json("could not retrieve user subscription")
    }
})

router.get("/due", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/');
    }
    try {
        let date = new Date();
        // let oneWeek = format(date, "YYYY");
        console.log(date);
        // console.log(oneWeek);
        const userSkriptz = await User.findOne({
            where: {
                id: req.session.user_id
            },
            include: [{model: Subscription,
                include: [{model: Category}]
            }]
        })
        if (!userSkriptz) return res.status(404).json("couldn't find user subscriptions");
        const userInfo = userSkriptz.get({plain: true})
        res.render("due", {userInfo});
    } catch (err) {
        res.status(500).json("could not retrieve user subscription")
    }
})

router.get("/profile", (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/');
    }
    res.render("profile")
})

module.exports = router;