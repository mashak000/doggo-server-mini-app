/* eslint-disable camelcase */
const { Router } = require('express');
const { Sitter } = require('../db/models');

const router = Router();

router.route('/').get(async (req, res) => {
  const data = await Sitter.findAll();
  return res.json(data);
});

module.exports = router;
