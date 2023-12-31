const express = require('express');
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/categories');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname );
    }
});
const fileFilter = (req, file, cb) => {
        cb(null, true);
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

const router = express.Router();

const categoryController = require('../controller/categoryController');

const isAuth = require('../middleware/isAuthMddleware');

const isManager = require('../middleware/isManagerMddleware');

router.use(isAuth);

router.get('/categories', categoryController.getAllCategories);

router.get('/category/:id', categoryController.getOneCategorie);

router.use(isManager);

router.post('/category/store', upload.single('image'), categoryController.storeCategory);

router.put('/category/edit/:id', upload.single('image'), categoryController.updateCatrgory);

router.delete('/category/delete/:id', categoryController.deleteCategory);

module.exports = router;






