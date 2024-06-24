/* eslint-disable camelcase */
const { Router } = require('express');
const { User } = require('../db/models');

const router = Router();

router.get('/', async (req, res) => {
  const data = User.findAll();
  return res.json(data);
});

router.route('/signup').post(async (req, res) => {
  try {
    const { user } = res.locals.initData;
    console.log('user: ', user);

    const [newUser] = User.findOrCreate({
      where: { tgId: user.id },
      defaults: user,
    });

    // if (!created) {
    //   return res.status(403).json({ message: 'User already exists' });
    // }
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
});

module.exports = router;
