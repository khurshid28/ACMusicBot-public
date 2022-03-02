const {bot}=require("../getInstance")
bot.on('/menu', (msg) => {
      console.log(msg.chat.id);
      bot.sendMessage(msg.chat.id, "Menu chat!")
})