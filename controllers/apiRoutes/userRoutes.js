const router = require("express").Router();
const {Subscription, Category, User} = require("../../models")

// for endpoints '/api/user'
router.get('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.redirect("/");
        })
    } else {
        res.status(400).end();
    }
})

router.post("/", async (req,res) => {
    try {
        const userdata = await User.create(req.body);
        if (!userdata) return res.status(404).json("failed to create");
        
        req.session.save(() => {
            req.session.user_id = userdata.id;
            req.session.user_name = userdata.user_name;
            req.session.email = userdata.email;
            req.session.first_name = userdata.first_name;
            req.session.last_name = userdata.last_name;
            req.session.loggedIn = true;
            
            res.status(200).json(userdata);
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/", async (req,res) => {
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                id: req.session.user_id
            },
            individualHooks: true
        })
        if(updatedUser[0]) {res.status(200).json(updatedUser)} else {res.status(404).json("update failed")};
    } catch (err) {
        throw err;
        res.status(500).json(err)
    }
})

router.post("/login", async (req,res) => {
    try {
        const userdata = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if(!userdata) return res.status(404).json("Invalid Credentials");
        
        validity = userdata.checkPassword(req.body.password)
        if (!validity) return res.status(404).json("Invalid Credentials!");
        
        let user = userdata.get({plain: true});
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.user_name = user.user_name;
            req.session.email = user.email;
            req.session.first_name = user.first_name;
            req.session.last_name = user.last_name;
            req.session.loggedIn = true;
            
            res.status(200).json('logged in');
        })
    } catch (err) {
        throw err;
        res.status(500).json(err);
    }
})

router.get("/:id", async (req,res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        },
        include: [{model: Subscription,
            include: [{model: Category}]
        }]
    })
    if (!user) return res.status(404).json("couldn't find user info");
    res.status(200).json(user);
})

module.exports = router;