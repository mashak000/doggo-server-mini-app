const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    `Welcome to Doggo, ${ctx.from.first_name}!`,
    Markup.inlineKeyboard([
      // TODO: тут отобразить что у нас за команды есть
      Markup.button.webApp('🐶', 'https://doggo-test-teal.vercel.app/'),
    ]),
  ),
);

bot.command('contact', (ctx) => {
  ctx.reply('Contact us via email at doggotbilisi@gmail.com 🐶');
});

bot.command('feedback', (ctx) => {
  ctx.reply("We'd love to hear your feedback! Please type your message below.");
});

bot.on('text', (ctx) => {
  if (ctx.message.text.toLowerCase() !== '/feedback') {
    // Handle feedback here, e.g., save to a database or send an email
    ctx.reply('Thank you for your feedback!');
  }
});

module.exports = bot;
