const express = require('express');

const router = express.Router();

const contractorController = require('../controller/contractorController');

const isAuth = require('../middleware/isAuthMddleware')

router.post('/contractor-projects', contractorController.getAllContractorProjects);

router.post('/contractor-materials/:id', contractorController.getContractorMaterialFromOneStage);

router.use(isAuth)

router.get('/contractors', contractorController.getAllContractors);

router.get('/contractor/:id', contractorController.getOneContractorWithMaterials);


module.exports = router;