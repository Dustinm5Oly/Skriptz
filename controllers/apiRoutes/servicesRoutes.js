const router = require("express").Router();
const {Subscription, Category, User} = require("../../models")

// for endpoints '/api/service'
router.get('/', async (req,res) => {

})

router.post('/', async (req,res) => {
    try {
        let service = req.body;
        service.user_id = req.session.user_id;
        let postedService = await Subscription.create(service);
        res.status(200).json(postedService);
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req,res) => {
    try {
        let serviceToDelete = req.params.id;
        let deletedService = await Subscription.destroy({
            where: {
                id: serviceToDelete
            }
        })
        (deletedService) ? res.status(200).json("post deleted") : res.status(404).json("Failed to Delete");
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;