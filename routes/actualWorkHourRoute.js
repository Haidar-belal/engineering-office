const express = require('express');

const router = express.Router();

const absenceOrderController = require('../controller/actualWorkHourController');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');

router.use(isAuth, isManager);

router.get('/actual-work-hours', absenceOrderController.getOneEngineerWorksInDay);

module.exports = router;