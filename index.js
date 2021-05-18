const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1699311562:AAEj8R8-QaWXG56bL7Y0So9TL8uu3NreXQU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/inspirame/, msg => {
  
    const array = [
        "Si se puede imaginar, se puede programar",
        "Mientras tú dices que es imposible, alguien más lo está programando",
        "Si crees que estas solo recuerda que siempre habrá un bug que estará contigo",
        "Nunca enseñes tu código fuente a quién solo busca tu interfaz",
        "De pequeño soñaba con tener superpoderes. Ahora programo, es casi lo mismo",
        "Quédate con quien te enseñe a programar, hacer páginas en Wix te lo enseña cualquiera",
        "No dejes para mañana lo que puedes programar hoy",
        "Mientras unos sufren por amor, tu sufres porque no compila",
        "Eres un 1 o un 0, tú eliges",
        "Continua programando, el cansancio es temporal, la satisfacción es para siempre",
        "Si la vida no te compila, cambia tú línea de código",
        "Primero resuelve el problema, luego escribe el código",
        "No es que seas feo, es que te falta CSS",
        "Las contraseñas son como la ropa interior. No puedes dejar que nadie la vea, debes cambiarla regularmente y no debes compartirla con extraños",
        "Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza",
        "No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo",
        "La verdad solo se puede encontrar en un lugar: el código",
        "Tanto si piensas que puedes o si piensas que no puedes programarlo, tienes razón",
        "Cuando aprendes a programar, o juegas con los códigos o ellos juegan contigo",
        "Programación comienza con P y termina con tu vida social, amorosa, y entras en el mundo de la ansiedad y depresión. JAJAJA ok no, creo que no debía decir eso!",
        "Lo que no compila, te hace más fuerte",
        "Te van a criticar por TODO! Tú sigue copiando los códigos de Stackoverflow",
        "Hay un cierto placer en la programación que solo tú conoces",
        "Confía en tu habilidad para Googlear y tu código compilará",
        "Programar causa una frustración enorme, pero asi de grande será la recompensa",
        "Recuerda compartir todo lo que sepas, eso será tu mejor backup, soporte y repositorio",
        "Tener éxito no es una función random, es una variable dependiente del esfuerzo",
        "Jamás te arrepientas de hablerle solucionado los bugs a las personas equivocadas",
        "La programación nos enseña que todos los problemas tienen solución",
        "No importa cuantas veces te hayas equivocado, la vida es más un algoritmo en proceso que un proyecto final",
        "Te podrán copiar el código, pero el talento jamas",
        "El mejor depurador que existe, es una buena noche de sueño",
        "Preguntate si lo que estas haciendo hoy, te acerca a ser el programador en el que te quieres convertir mañana",
        "Veo que tu corazón es como la programación, no es para cualquiera",
        "Si una taza de café no te despierta en la mañana, intenta eliminando una tabla de la base de datos en producción"
    ];
  
    const randomElement = array[Math.floor(Math.random() * array.length)];
  
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, randomElement);
});