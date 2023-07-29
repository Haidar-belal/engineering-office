const express = require('express');

const router = express.Router();

const authController = require('../controller/authController');

const authValidation = require('../validation/authValidation');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');

router.post('/login', authValidation.login, authController.login);

router.use(isAuth);

router.put('/engineer-logout/:id', authController.engineerlogout);

router.use(isManager)

router.put('/manager-logout/:id', authController.managerlogout);


module.exports = router;