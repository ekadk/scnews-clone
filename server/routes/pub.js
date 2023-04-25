const PostController = require('../controllers/post');

const router = require('express').Router();

router.get('/posts', PostController.pubGetAllPosts)
router.get('/posts/:id', PostController.pubGetPostById)

module.exports = router