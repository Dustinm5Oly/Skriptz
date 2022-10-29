const router = require("express").Router();

// for end point '/'
router.get("/", (req, res) => {
    res.render("homepage", {layout: "home"})
})

router.get("/add_service", (req, res) => {
    res.render("add_service")
})

router.get("/current_services", async (req, res) => {
    // try {
    //     const userSkriptz = await User.findOne({
    //         where: {
    //             id: req.session.id
    //         },
    //         include: [{model: Service}]
    //     })
    //     if (!userSkriptz) return res.status(404).json("couldn't find user subscriptions");
    //     const userInfo = userSkriptz.get({plain: true})
    //     res.render("current_services", {userInfo});
    // } catch (err) {
    //     res.status(500).json("could not retrieve user subscription")
    // }
    res.render("current_services");
})

router.get("/due", (req, res) => {
    
    res.render("due")
})

router.get("/profile", (req, res) => {
    res.render("profile")
})

module.exports = router;