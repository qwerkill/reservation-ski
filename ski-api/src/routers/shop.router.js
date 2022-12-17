const express = require('express');
const router = express.Router();
const ShopController = require('../controller/shop.controller');

const endPoint = '/shops';

router.get(`${endPoint}`,ShopController.getAll);
router.get(`${endPoint}/:id`,ShopController.getOne);
router.post(`${endPoint}`,ShopController.create);
router.put(`${endPoint}/:id`,ShopController.update);
router.delete(`${endPoint}/:id`,ShopController.delete);
