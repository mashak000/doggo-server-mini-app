/* eslint-disable camelcase */
const { Router } = require('express');
const { Question } = require('../db/models');

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const data = await Question.findAll();
    return res.json(data);
  })
  .post(async (req, res) => {
    try {
      const { body } = req;
      console.log('dog: ', body);

      const newQuestion = await Question.create(body);
      return res.status(200).json(newQuestion);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error' });
    }
  });

module.exports = router;
