const express = require('express');

const router = express.Router();

const projectController = require('../controller/projectController');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');


router.get('/owner/projects-info/:owner_id', projectController.getOwnerProjectInfo);// todo: should test

router.use(isAuth, isManager);

router.get('/project-info/:project_id', projectController.getOneProjectInfo);// todo: should test

router.get('/projects/active', projectController.getCurrentProjects);

router.get('/projects/finished', projectController.getAllFinishedProject);// todo: should test

router.get('/projects', projectController.getAllNotAcceptedProject);

router.put('/project/update-accepted/:id', projectController.updateProjectToAccepted);

router.put('/project/update-rejected/:id', projectController.updateProjectToUnaccepted);

router.get('/project/:id', projectController.getOneProject);

router.get('/projects-with-no-plan', projectController.getAllProjectsWiteNoPlan);

router.get('/projects/rejected', projectController.getRejectedProjects);

module.exports = router;