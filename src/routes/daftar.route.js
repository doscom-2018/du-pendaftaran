const express = require('express');
const router = express.Router();
const fileUpload = require('../fileUpload');
const daftarController = require('../controllers/daftar.controller');
const auth = require('../auth');

router.get('/', auth.checkAuth, daftarController.index);
router.post('/', fileUpload.single('file_upload'), daftarController.store);
router.delete('/:id', auth.checkAuth, daftarController.delete);
router.put('/:id', daftarController.put);
router.get('/:id', auth.checkAuth, daftarController.show);

module.exports = router;
