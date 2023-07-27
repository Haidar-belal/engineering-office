const express = require('express');

const router = express.Router();

const planController = require('../controller/planController');

const planValidation = require('../validation/planValidation');

router.get('/plans', planController.getAllPlans);

router.get('/plan/:id', planController.getOnePlan);

router.post('/plan/store', planValidation.storePlan, planController.storePlan);


module.exports = router;