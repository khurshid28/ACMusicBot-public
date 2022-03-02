const {bot}=require("../getInstance")
bot.on('/help', (msg) => {
      console.log(msg);
      bot.sendMessage(msg.chat.id, "Help chat!")
})