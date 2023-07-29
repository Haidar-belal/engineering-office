const express = require('express');

const multer = require('multer');

const router = express.Router();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/pdf');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
        cb(null, true);
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

const orderDocumentController = require('../controller/orderDocumentController');

const isAuth = require('../middleware/isAuthMddleware');

router.use(isAuth);

router.post('/order-document/store', upload.single("pdf"), orderDocumentController.storeOrderDocument); // not implemented


module.exports = router;