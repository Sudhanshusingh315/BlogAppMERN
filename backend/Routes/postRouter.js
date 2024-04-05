const router = require('express').Router();
const postController  = require("../Controller/postController")
router.post('/postcreate',postController.createPost)

exports.router = router;
