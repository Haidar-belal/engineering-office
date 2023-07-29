const express = require('express');

const router = express.Router();

const engineerAccountingController = require('../controller/engineerAccountingController');

const engineerAccountingValidation = require('../validation/engineerAccountingValidation');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');

router.use(isAuth, isManager);

router.get('/engineer-accounting-salary/:id', engineerAccountingController.getAllEngineerSalaries);

router.post('/engineer-accounting/store/:id', engineerAccountingValidation.storeEngineerAccounting, engineerAccountingController.storeEngineerAccount);

router.get('/engineer-accounting-advance-payment/:id', engineerAccountingController.getOneEngineerAdvancePayments);

module.exports= router;