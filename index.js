const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const bot = new TelegramBot('554225841:AAFzAjcxEN-Ki2d2xjeROtBbynG8qAjuGeI', {polling: true})

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"`)
})