const express = require('express');

const uploadController = require('./../controllers/uploadController');
const multerConfig = require('../middleware/multerConfigMiddleware');
const router = express.Router();
router.post(
  '/profile',
  multerConfig({ folderName: 'abc',resize:true }),
  uploadController.profile
);

module.exports = router;

// const MIME_TYPE_MAP = {
//     'image/png': 'png',
//     'image/jpeg': 'jpeg',
//     'image/jpg': 'jpg'
//   };
