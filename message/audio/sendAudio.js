const {bot}=require("../getInstance");
const { resultSongs } = require("./songs");

bot.on('text', async(msg) => { 
    const text=msg.text
    const userId=msg.chat.id
    const chatId=msg.message_id
    if (text !="/help" && text !="/menu" && text !="/start") {
        const songs =await resultSongs(text);
        if (text.length>1 && songs.length>0) {
            let sendData="<b>"
            for (let index = 1; index <= songs.length; index++) {
                sendData =sendData +index+"."+ songs[index-1].fileName+"\n";
            }
            
            sendData=sendData+"</b>"
            let inlinedata=[]
            for (var i = 0; i <= Math.floor((songs.length/5)); i++) {
                inlinedata.push([])
                let len=(songs.length -i * 5) > 5 ? 5:(songs.length -i * 5)
                for (let j = 0; j < len; j++) {
                    inlinedata[i].push(
                        
                        {
                            text: i*5 + (j+1),
                            callback_data:i*5 + j + 1
                        }
                    )
                    
                }
             }

            await bot.sendMessage(
                msg.chat.id, 
                sendData,
                {
                webPreview:false,
                parseMode: "HTML",
                replyToMessage:msg.message_id,
                replyMarkup: {
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    force_reply: true,
                    inline_keyboard: inlinedata
                  }
                
            })
            
            // await bot.sendAudio(userId, songs[0].fileId,{
            //     fileName:songs[0].fileName,
            // }).then(e=>console.log("sent")).catch(err=>console.log("error:",err))
            
            // await bot.answerCallbackQuery(userId,{
            //     text:"hello"
            // })

        } else {
            await bot.sendMessage(userId, "Can't Exist")
        }

    }
})



bot.on('callbackQuery',async(query)=>{
    const text=query.message.reply_to_message.text
    const userId=query.message.chat.id
    const index=query.data - 1
    const songs =await resultSongs(text)
    await bot.sendAudio(userId, songs[index].fileId,{
        fileName:songs[index].fileName,
    })
    .then(async e=>{
        await bot.answerCallbackQuery(query.id,{
            text:"The Song is sent you",
            cacheTime:3,
            showAlert:false
         })
        console.log("sent")
    })
    .catch(async err=>{
        await bot.answerCallbackQuery(query.id,{
            text:"Can't send you",
            cacheTime:3,
            showAlert:false
         })
        console.log("error:",err)
    })


})