/* eslint-disable camelcase */
const { Router } = require('express');
const { Sitter } = require('../db/models');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.route('/').get(authMiddleware, async (req, res) => {
  const data = await Sitter.findAll();
  return res.json(data);
});

module.exports = router;
