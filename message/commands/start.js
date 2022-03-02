const {bot}=require("../getInstance")
const {newUser}=require("../getmethods")
bot.on('/start', async(msg) => {
      const userId=msg.chat.id
      const userName=msg.chat.username
      const data =await newUser(userId,userName)
      if (data) {
            bot.sendMessage(userId, "You are Active")
      } else {
            bot.sendMessage(userId, "You are already Exist")
      }
})
