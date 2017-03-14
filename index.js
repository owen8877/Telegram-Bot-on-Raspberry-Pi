const TelegramBot = require('node-telegram-bot-api');
const {proxy, token} = require('./private')

const bot = new TelegramBot(token, {polling: true, request: {proxy}});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  console.log(`Incoming chatId-${chatId} resp-${resp}`)

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  console.log(`Incoming msg-${msg}`)
  bot.sendMessage(chatId, 'Received your message');
});
