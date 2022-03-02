const Telebot = require('telebot');
const bot = new Telebot(process.env.TOKEN,{polling:true});
module.exports.bot=bot
