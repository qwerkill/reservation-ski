const express = require('express'); 
const router = express.Router();
const PostController = require('../controller/post.controller')

const endPoint = '/posts';

router.get(`${endPoint}`,PostController.getAll);
router.get(`${endPoint}/:id`,PostController.getOne);
router.post(`${endPoint}`,PostController.create);
router.put(`${endPoint}/:id`,PostController.update);
router.delete(`${endPoint}/:id`,PostController.delete);

module.exports = router