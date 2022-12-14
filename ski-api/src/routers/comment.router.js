const express = require('express');
const router = express.Router();
const CommentController = require('../controller/comment.controller');

const endPoint = '/comments';

router.post(`${endPoint}`, CommentController.create);

module.exports = router