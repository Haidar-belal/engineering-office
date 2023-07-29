const express = require('express');

const router = express.Router();

const stageBillController = require('../controller/stageBillController');

const stageValidation = require('../validation/stageValidation');

const isAuth = require('../middleware/isAuthMddleware');

router.use(isAuth);

router.post('/stage-bill/store', stageValidation.storeStageBill, stageBillController.storeStageBill);

module.exports = router;