const express = require('express');

const router = express.Router();

const advertisementController = require('../controller/advertisementController');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');

router.use(isAuth, isManager);

router.get('/advertisements', advertisementController.getAllAdvertisements);


module.exports = router




