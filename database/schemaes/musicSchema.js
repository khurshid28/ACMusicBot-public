const {mongoose}=require("../connection")
const Schema = mongoose.Schema
//Musics Schema
const musicSchema= new Schema({
    fileId: String,
    fileName: String,

})
module.exports={
    musicSchema
}
