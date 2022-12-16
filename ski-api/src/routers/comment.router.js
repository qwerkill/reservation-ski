const express = require('express');
const router = express.Router();
const CommentController = require('../controller/comment.controller');

const endPoint = '/comments';

router.post(`${endPoint}`, CommentController.create);
router.get(`${endPoint}/posts/:id`, CommentController.getAllByPost);
router.get(`${endPoint}`, CommentController.getAll);

module.exports = router