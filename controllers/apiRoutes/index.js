const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const servicesRoutes = require("./servicesRoutes.js");
const categoriesRoutes = require("./categoriesRoutes.js");

// for endpoint '/api'
router.use("/user", userRoutes);
router.use('/service', servicesRoutes);
router.use('/category', categoriesRoutes);

module.exports = router;