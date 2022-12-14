const express = require('express');
const router = express.Router();
const BookingController = require('../controller/booking.controller');

const endPoint = '/bookings';

router.post(`${endPoint}`, BookingController.create);

module.exports = router