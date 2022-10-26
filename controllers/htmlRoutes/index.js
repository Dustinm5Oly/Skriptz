const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("homepage")
})

router.get("/add_service", (req, res) => {
    res.render("add_service")
})

router.get("/current_services", (req, res) => {
    res.render("add_service")
})

router.get("/due", (req, res) => {
    res.render("profile")
})

router.get("/profile", (req, res) => {
    res.render("profile")
})

module.exports = router;