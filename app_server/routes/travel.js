const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');

/* GET home page. */
router
    .route('/')
    .get(controller.travel);
module.exports = router;