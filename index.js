// Подключаем библиотеку для работы с Telegram API в переменную
let TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот
let token = '1264102208:AAG2odfAZmrurchSALRGjMdDyik0Xyr_Ho4';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
let bot = new TelegramBot(token, {
    polling: true,
    none_stop: true
});

let mainOptions = {
    "reply_markup": {
        "keyboard": [
            ["Hi 😁"],
            ["Keyboard ⌨️"],
            ["I'm robot 🤖"]
        ]
    }
};

bot.on('message', (msg) => {
    if (msg.text === '/start') {
        bot.sendMessage(msg.chat.id, "Добро пожаловать в главное меню бота!", mainOptions);        
    }
    
});



bot.on('message', (msg) => {
    let hi = "Hi 😁",
        keyboard = "Keyboard ⌨️",
        robot = "I'm robot 🤖";
    if (msg.text === hi) {
        bot.sendMessage(msg.chat.id, "Привет " + msg.from.first_name + "!", {
            "reply_markup": {
                "keyboard": [
                    ["Next option"],
                    ["<- Back"]
                ]
            }
        });
    } else if (msg.text === keyboard) {
        bot.sendMessage(msg.chat.id, "Да, поклацал кнопочки, бывает");
    } else if (msg.text === robot) {
        bot.sendMessage(msg.chat.id, "А я типа не робот");
    } else if (msg.text === '<- Back') {
        bot.sendMessage(msg.chat.id, text = "Вы вернулись в Главное меню!", mainOptions);
    } else {
        if (msg.text === '/start') {
            return false;
        } else {
            bot.sendMessage(msg.chat.id, "Я пока что не настолько умён. Отправил ответ админу", mainOptions);
            bot.sendMessage(msg.chat.id = '466777337', '<b>Сообщение от</b>: ' + msg.from.first_name + ' ' + msg.from.last_name + '\n<b>Username:</b> @' + msg.from.username + '\n----------------\n' + msg.text, {
                parse_mode: "HTML"
            });
        }

    }
});

let date = new Date();
console.log('\n\n-------------------Bot started working (' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ')-------------------\n\n');

setInterval(function () {
    let newDate = new Date();
    console.log('-------------------Bot is working (' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds() + ')-------------------\n');
}, 10000);

// Простая команда без параметров