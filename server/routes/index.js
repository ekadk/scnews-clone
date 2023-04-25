const express = require("express");
const router = express.Router();
const adminRouter = require('./admin');
const pubRouter = require('./pub');
const postsRouter = require('./posts');
const categoriesRouter = require('./categories');
const tagsRouter = require('./tags');
const authentication = require("../middlewares/authentication");

router.use('/admin', adminRouter)
router.use('/pub', pubRouter)

router.use(authentication)

router.use('/posts', postsRouter)
router.use('/categories', categoriesRouter)
router.use('/tags', tagsRouter)

module.exports = router;
