const express = require('express');

const router = express.Router();

const absenceOrderController = require('../controller/absenceOrderController');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');

router.use(isAuth, isManager);

router.get('/absence-orders', absenceOrderController.getAllAbsenceOrder);

module.exports = router;