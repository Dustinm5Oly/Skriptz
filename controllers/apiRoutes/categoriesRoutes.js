const router = require("express").Router();

// for endpoint '/api/category'
router.get("/", (req,res) => {
    console.log("I made it here");
    res.json("no issues");
})

module.exports = router;