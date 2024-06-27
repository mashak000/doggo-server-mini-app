const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  ctx.reply(
    `Welcome to Doggo, ${ctx.from.first_name}!`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('🐶', 'https://doggo-test-teal.vercel.app/')],
      [Markup.button.callback('Contact', 'contact_command')],
    ]),
  );
});

bot.action('contact_command', (ctx) => {
  ctx.reply('Contact us via email at doggotbilisi@gmail.com 🐶📨');
});

module.exports = bot;
