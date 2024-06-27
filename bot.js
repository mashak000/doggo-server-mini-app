const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

bot.telegram.setMyCommands([
  { command: 'start', description: 'Restart bot' },
  { command: 'contact', description: 'Contact us' },
  { command: 'feedback', description: 'Feedback' },
]);

const mainMenuKeyboard = Markup.keyboard([
  [Markup.button.webApp('🐶', 'https://doggo-test-teal.vercel.app/')],
])
  .resize()
  .persistent();

bot.start((ctx) => {
  ctx.reply(`Welcome to Doggo, ${ctx.from.first_name}!`, {
    reply_markup: mainMenuKeyboard.reply_markup,
    input_field_placeholder: 'Select an option',
  });
});

bot.command('contact', (ctx) => {
  ctx.reply('Contact us via email at doggotbilisi@gmail.com 🐶📨', {
    reply_markup: mainMenuKeyboard, // Keep the keyboard persistent
  });
});

bot.command('feedback', (ctx) => {
  ctx.reply(
    "We'd love to hear your feedback! Please type your message below.",
    {
      reply_markup: mainMenuKeyboard, // Keep the keyboard persistent
    },
  );
});

bot.on('text', (ctx) => {
  if (ctx.message.text.toLowerCase() !== '/feedback') {
    // Handle feedback here, e.g., save to a database or send an email
    ctx.reply('Thank you for your feedback!', {
      reply_markup: mainMenuKeyboard, // Keep the keyboard persistent
    });
  }
});

bot.action('contact_command', (ctx) => {
  ctx.reply('doggotbilisi@gmail.com', {
    reply_markup: mainMenuKeyboard, // Keep the keyboard persistent
  });
});

bot.action('feedback_command', (ctx) => {
  ctx.reply(
    "We'd love to hear your feedback! Please type your message below.",
    {
      reply_markup: mainMenuKeyboard, // Keep the keyboard persistent
    },
  );
});

bot.launch();

module.exports = bot;
