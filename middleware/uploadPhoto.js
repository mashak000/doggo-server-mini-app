const multer = require('multer');
const path = require('path');

const dest = path.join(__dirname, '..', 'uploads');
const uploadPhoto = multer({ dest });

module.exports = uploadPhoto;
