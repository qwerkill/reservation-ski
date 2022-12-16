const express = require('express');
const router = express.Router();
const BookingController = require('../controller/booking.controller');

const endPoint = '/bookings';

router.post(`${endPoint}`, BookingController.create);
router.get(`${endPoint}/posts/;id`, BookingController.getAllByPost);
router.get(`${endPoint}`, BookingController.getAll);

module.exports = router