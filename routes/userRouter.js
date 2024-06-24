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

    const [newUser, created] = User.findOrCreate({
      where: { tgId: user.id },
      defaults: user,
    });

    if (!created) {
      return res.status(403).json({ message: 'User already exists' });
    }
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
});

module.exports = router;

//
// initData:  {
//   authDate: 2024-06-24T08:13:11.000Z,
//   hash: '6e78b4cb71e7bbff90901557c947ecb5db3fd2586d8e9f0c3b73263de5621e0d',
//   queryId: 'AAH7r9MJAAAAAPuv0wlhYywV',
//
// {
//     allowsWriteToPm: true,
//     firstName: 'Masha',
//     id: 164868091,
//     languageCode: 'en',
//     lastName: '',
//     username: 'mashak000'
//   }
// }
// user:  {
//   allowsWriteToPm: true,
//   firstName: 'Masha',
//   id: 164868091,
//   languageCode: 'en',
//   lastName: '',
//   username: 'mashak000'
// }
