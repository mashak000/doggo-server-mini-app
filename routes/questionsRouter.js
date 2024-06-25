/* eslint-disable camelcase */
const { Router } = require('express');
const { Dogquestion, Orderquestion, Dog } = require('../db/models');

const router = Router();

router
  .route('/dog')
  .get(async (req, res) => {
    const data = await Dogquestion.findAll();
    return res.json(data);
  })
  .post(async (req, res) => {
    try {
      const { body: answers } = req;
      console.log('answers: ', answers);

      // const name = answers.find((el) => el.questionId === 1).answer;
      // const breed = answers.find((el) => el.questionId === 2).answer;
      // const age = answers.find((el) => el.questionId === 3).answer;
      // const health = answers.find((el) => el.questionId === 4).answer;
      // const charachter = answers.find((el) => el.questionId === 5).answer;
      // const vaccinated = answers.find((el) => el.questionId === 6).answer;
      // const parasites = answers.find((el) => el.questionId === 7).answer;
      // const sterilized = answers.find((el) => el.questionId === 8).answer;

      const newDogProperties = answers.reduce((obj, item) => {
        // eslint-disable-next-line no-param-reassign
        obj[item.name] = item.answer;
        return obj;
      }, {});

      const newDog = await Dog.create(newDogProperties);
      return res.status(200).json(newDog);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error' });
    }
  });

router.route('/order').get(async (req, res) => {
  const data = await Orderquestion.findAll();
  return res.json(data);
});
// .post(async (req, res) => {
//   try {
//     const { body } = req;
//     console.log('body: ', body);

//     //   const newDogquestion = await Dogquestion.create(body);
//     //   return res.status(200).json(newDogquestion);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: 'Error' });
//   }
// });

module.exports = router;
