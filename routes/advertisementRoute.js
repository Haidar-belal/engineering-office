const express = require('express');

const router = express.Router();

const advertisementController = require('../controller/advertisementController');

router.get('/advertisements', advertisementController.getAllAdvertisements);


module.exports = router




