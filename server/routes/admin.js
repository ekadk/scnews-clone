const AdminController = require("../controllers/admin");
const authentication = require("../middlewares/authentication");
const router = require("express").Router();

router.use("/login", AdminController.login);
router.use(authentication)
router.use("/register", AdminController.register);

module.exports = router;
