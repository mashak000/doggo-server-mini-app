/* eslint-disable camelcase */
const { Router } = require('express');
const { User } = require('../db/models');
// const showInitDataMiddleware = require('../middleware/showInitDataMiddleware');

const router = Router();

router.get('/', async (req, res) => {
  const data = User.findAll();
  return res.json(data);
});

router.route('/signup').post(async (req, res) => {
  const { initData } = res.locals;
  console.log('initData: ', initData);
  console.log('user: ', initData.user);

  try {
    return res.status(200).json(initData.user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
});

module.exports = router;
