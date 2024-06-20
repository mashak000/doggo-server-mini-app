require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");

const token = process.env.TOKEN;
const url = "https://delightful-monstera-119621.netlify.app";

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  console.log(text);

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка, заполни форму", {
      reply_markup: {
        keyboard: [[{ text: "заполни форму" }]],
      },
    });

    await bot.sendMessage(chatId, "Заходи в наш интернет магазин", {
      reply_markup: {
        inline_keyboard: [[{ text: "Сделать заказ", web_app: { url } }]],
      },
    });
  }
});

app.get("/", async (req, res) => {
  return res.status(200).json({ message: "server is working" });
});

app.post("/web-data", async (req, res) => {
  const { queryId } = req.body;
  try {
    await bot.answerWebQuery(queryId, {
      type: "article",
      id: queryId,
      title: "Ответ с сервера",
      input_message_content: {
        message_text: "Текст ответа с сервера",
      },
    });
    return res.status(200).json({});
  } catch (error) {
    await bot.answerWebQuery(queryId, {
      type: "article",
      id: queryId,
      title: "Ответ с сервера",
      input_message_content: {
        message_text: "Ошибка",
      },
    });
    return res.status(500).json({});
  }
});

const PORT = 8000;

app.listen(PORT, () => console.log(` Server started on port ${PORT}`));
