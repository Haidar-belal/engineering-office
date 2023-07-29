const express = require('express');

const router = express.Router();

const managerController = require('../controller/managerController');

const managerValidation = require('../validation/managerValidation');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');

router.use(isAuth, isManager);

router.get('/managers', managerController.getAllManagers);

router.get('/manager/:id', managerController.getOneManager);

router.post('/manager/store', managerValidation.storeManager, managerController.storeManager);

router.put('/manager/edit/:id', managerValidation.storeManager, managerController.updateManager);

router.delete('/manager/delete/:id', managerController.deleteManager);


module.exports = router;