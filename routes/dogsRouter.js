/* eslint-disable camelcase */
const { Router } = require('express');
const fs = require('fs');
const multer = require('multer');
const { Dog } = require('../db/models');
// const uploadPhoto = require('../middleware/uploadPhoto');
const upload = multer({ dest: 'uploads/' });

const router = Router();

router.route('/').get(async (req, res) => {
  const { id } = res.locals.initData.user;
  const data = await Dog.findAll({ where: { userId: id } });
  return res.json(data);
});

router.route('/uploadImage').post(
  // uploadPhoto.array('data', 10),
  upload.single('photo'),
  async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);
    try {
      const uploadedFiles = [];
      for (let i = 0; i < req.files.length; i += 1) {
        const { path: oldPath, originalname } = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = `${oldPath}.${ext}`;
        fs.renameSync(oldPath, newPath);
        uploadedFiles.push(newPath.replace('uploads/', ''));
      }
      res.json(uploadedFiles);
    } catch (error) {
      console.log(error);
    }
  },
);

module.exports = router;
