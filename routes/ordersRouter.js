const { Router } = require('express');
const { Order, User, Dog, Sitter, Tariff } = require('../db/models');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.route('/').get(authMiddleware, async (req, res) => {
  const { id } = res.locals.initData.user;
  const data = await Order.findAll({
    where: { userId: id, isActive: true },
    include: [
      { model: User },
      { model: Dog },
      { model: Sitter },
      { model: Tariff },
    ],
  });
  return res.json(data);
});

router.route('/history').get(authMiddleware, async (req, res) => {
  const { id } = res.locals.initData.user;
  const data = await Order.findAll({
    where: { userId: id, isActive: false },
    include: [
      { model: User },
      { model: Dog },
      { model: Sitter },
      { model: Tariff },
    ],
  });
  return res.json(data);
});

module.exports = router;
