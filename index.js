const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1699311562:AAEj8R8-QaWXG56bL7Y0So9TL8uu3NreXQU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/inspirame/, msg => {
  
    const array = ["JS","Python","Java","C#","Go", "Php"];
  
    const randomElement = array[Math.floor(Math.random() * array.length)];
  
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, randomElement);
});