const {mongoose}=require("../connection")
const Schema = mongoose.Schema
//user Schema
const userSchema= new Schema({
    userId: String,
    userName: String,
})


module.exports={
    userSchema
}