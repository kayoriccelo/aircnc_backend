const express = require('express');
const multer = require('multer');

const uploadConfig = require('../config/upload');
const SessionController = require('../controllers/Session');
const SpotController = require('../controllers/Spot');
const DashboardController = require('../controllers/Dashboard');
const BookingController = require('../controllers/Booking');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.index);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
