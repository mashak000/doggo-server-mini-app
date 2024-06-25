const { Router } = require('express');
const { Order, User, Dog, Sitter, Tariff } = require('../db/models');

const router = Router();

router.route('/').get(async (req, res) => {
  const { id } = res.locals.initData.user;
  const data = await Order.findAll({
    where: { userId: id },
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
