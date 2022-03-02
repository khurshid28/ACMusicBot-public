//config
require("./config")

const {bot}=require("./instance/index/index")

//message
require("./message/index/index")
//database
require("./database/index/index")


bot.start()