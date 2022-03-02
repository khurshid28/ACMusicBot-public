const {mongoose}=require("../connection")
const {musicSchema}=require("../schemaes/index/index")

const MusicModel=mongoose.model("music",musicSchema)

const songs=async ()=>{
    return (await MusicModel.find({}));
}

module.exports={
    songs
}