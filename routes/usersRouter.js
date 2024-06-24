/* eslint-disable camelcase */
const { Router } = require('express');
const { User } = require('../db/models');

const router = Router();

router.get('/', async (req, res) => {
  const data = await User.findAll();
  return res.json(data);
});

router.route('/signup').post(async (req, res) => {
  try {
    const { user } = res.locals.initData;
    console.log('user: ', user);

    const [newUser, created] = await User.findOrCreate({
      where: { tgId: user.id },
      defaults: user,
    });

    if (!created) {
      return res.json({ message: 'User already exists', user: newUser });
    }
    return res.json({ message: 'User created', user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
});

router.route('/login').post(async (req, res) => {
  try {
    const { user } = res.locals.initData;
    console.log('user: ', user);

    const foundUser = await User.findOne({ where: { tgId: user.id } });

    if (!foundUser) {
      return res.status(403).json({ message: 'User does not exist' });
    }
    return res.json({ message: 'User Logged In', user: foundUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
});

module.exports = router;
