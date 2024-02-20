var express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get('/trips/:tripCode', tripsController.tripsFindByCode)
    .put('/trips/:tripCode', tripsController.tripsUpdateTrip);


module.exports = router;