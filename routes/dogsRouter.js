/* eslint-disable camelcase */
const { Router } = require('express');
const { Dog } = require('../db/models');

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const data = await Dog.findAll();
    return res.json(data);
  })
  .post(async (req, res) => {
    try {
      const { body } = req;
      console.log('dog: ', body);

      const newDog = await Dog.create(body);
      return res.status(200).json(newDog);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error' });
    }
  });

module.exports = router;
