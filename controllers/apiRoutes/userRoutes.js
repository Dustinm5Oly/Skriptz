const router = require("express").Router();

// for endpoints '/api/user'
router.get("/:id", async (req,res) => {
    try {
        const userSkriptz = await User.findOne({
            where: {
                id: req.params.id
            },
            include: [{model: Service}]
        })
        (userSkriptz) ? res.status(200).json(userSkriptz) : res.status(404).json("couldn't find user");
    } catch (err) {
        res.status(500).json("could not retrieve user subscription")
    }
})

router.post("/", async (req,res) => {
    try {
        const userdata = await User.create(req.body);
        if (!userdata) return res.status(404).json("failed to create");
        
        req.session.save(() => {
            req.session.user_id = userdata.id;
            req.session.loggedIn = true;

            res.status(200).json("user successfully created");
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/", async (req,res) => {
    try {
        const userdata = await User.update(req.body, {
            where: {
                id: req.session.id
            }
        })
        (userdata[0]) ? res.status(200).json("Update Succeeded!") : res.status(404).json("update failed");
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/login", async (req,res) => {
    try {
        const userdata = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(!userdata) return res.status(404).json("Invalid Credentials");
    
        validity = userdata.checkpassword(req.body.password)
        if (!validity) return res.status(404).json("Invalid Credentials!");
    
        user = userdata.get({plain: true});
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.loggedIn = true;
    
            res.status(200).json('logged in');
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.redirect("/");
        })
    } else {
        res.status(400).end();
    }
})

module.exports = router;