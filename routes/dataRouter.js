const { Router } = require('express');
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const router = Router();

router.get('/', async (req, res) => res.status(200).json({ message: 'server is working' }));

router.post('/', async (req, res) => {
  const { queryId } = req.body;
  try {
    await bot.answerWebQuery(queryId, {
      type: 'article',
      id: queryId,
      title: 'Ответ с сервера',
      input_message_content: {
        message_text: 'Текст ответа с сервера',
      },
    });
    return res.status(200).json({});
  } catch (error) {
    await bot.answerWebQuery(queryId, {
      type: 'article',
      id: queryId,
      title: 'Ответ с сервера',
      input_message_content: {
        message_text: 'Ошибка',
      },
    });
    return res.status(500).json({});
  }
});

module.exports = router;
