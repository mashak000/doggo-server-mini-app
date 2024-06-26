/* eslint-disable camelcase */
const { Router } = require('express');
const { Question, Dog, Order } = require('../db/models');

const router = Router();

router
  .route('/dog')
  .get(async (req, res) => {
    const data = await Question.findAll({ where: { theme: 'dog' } });
    return res.json(data);
  })
  .post(async (req, res) => {
    try {
      const { body: answers } = req;
      console.log('answers: ', answers);

      const newDogProperties = answers.reduce((obj, item) => {
        if (
          item.question.type === 'select' ||
          item.question.inputtype === 'number'
        ) {
          // eslint-disable-next-line no-param-reassign
          obj[item.question.name] = Number(item.answer) || -1;
        } else if (item.question.type === 'boolean') {
          // eslint-disable-next-line no-param-reassign
          obj[item.question.name] = item.answer === 'true';
        } else {
          // eslint-disable-next-line no-param-reassign
          obj[item.question.name] = item.answer;
        }

        return obj;
      }, {});

      const newDog = await Dog.create({
        ...newDogProperties,
        userId: res.locals.initData?.user?.id || 1,
      });
      return res.status(200).json(newDog);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error' });
    }
  });

router
  .route('/order')
  .get(async (req, res) => {
    const data = await Question.findAll({ where: { theme: 'order' } });
    return res.json(data);
  })
  .post(async (req, res) => {
    try {
      const { body: answers } = req;
      console.log('answers: ', answers);

      const newOrderProperties = answers.reduce((obj, item) => {
        if (item.type === 'select') {
          // eslint-disable-next-line no-param-reassign
          obj[item.name] = Number(item.answer);
        } else if (item.type === 'boolean') {
          // eslint-disable-next-line no-param-reassign
          obj[item.name] = item.answer === 'true';
        } else {
          // eslint-disable-next-line no-param-reassign
          obj[item.name] = item.answer;
        }

        return obj;
      }, {});

      const newOrder = await Order.create({
        ...newOrderProperties,
        sitterId: 1,
        userId: res.locals.initData?.user?.id || 1,
      });
      return res.status(200).json(newOrder);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error' });
    }
  });

module.exports = router;
