const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1699311562:AAEj8R8-QaWXG56bL7Y0So9TL8uu3NreXQU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/inspirame/, msg => {
  
    const array = [
        "Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza",
        "Hardware: las partes de un ordenador que pueden ser pateadas",
        "Somos Microsoft. La resistencia es inútil. Serás absorbido",
        "Controlar la complejidad es la esencia de la programación",
        "Esto es lo que ocurre con la gente que piensa que odia los ordenadores. Lo que realmente odia es a los programadores",
        "Eres el **if** en el que siempre quiero caer",
        "Eres el bucle que no quiero terminar",
        "Eres el while infinito del que nunca quiero salir",
    ];
  
    const randomElement = array[Math.floor(Math.random() * array.length)];
  
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, randomElement);
});