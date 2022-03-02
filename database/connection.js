const mongoose = require('mongoose')
const connection =async()=>{
    mongoose.connect(process.env.MongoDB_Adress, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

connection()
.then((v)=>{
    console.log("Mongo db connection")
})
.catch((err)=>{
    console.log("Mongo db Connection Error")
})


module.exports={
    mongoose
}