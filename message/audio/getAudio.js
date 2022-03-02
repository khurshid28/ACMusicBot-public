const {bot}=require("../getInstance")
const {newSong}=require("../getmethods")
bot.on('audio', async(msg) => {
      console.log(msg.audio)
      const fileId=msg.audio.file_id
      const fileName=msg.audio.file_name
      const chatId=msg.chat.id
      const data =await newSong(fileId,fileName)
      if (data) {
            bot.sendMessage(chatId, "Successfully Uploading")
      } else {
            bot.sendMessage(chatId, "The Song is already Exist")
      }
})
