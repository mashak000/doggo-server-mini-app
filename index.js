require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');
const dataRouter = require('./routes/dataRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRouter);
app.use('/api/web-data', dataRouter);

const token = process.env.TOKEN;
const url = 'https://delightful-monstera-119621.netlify.app';

const bot = new TelegramBot(token, { polling: true });
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const { text } = msg;
  console.log(text);

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
      reply_markup: {
        keyboard: [[{ text: 'заполни форму' }]],
      },
    });

    await bot.sendMessage(chatId, 'Заходи в наш интернет магазин', {
      reply_markup: {
        inline_keyboard: [[{ text: 'Сделать заказ', web_app: { url } }]],
      },
    });
  }
});

const PORT = 8000;

app.listen(PORT, () => console.log(` Server started on port ${PORT}`));
