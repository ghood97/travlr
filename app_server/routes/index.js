var express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router
    .route('/')
    .get(ctrlMain.index);

module.exports = router;