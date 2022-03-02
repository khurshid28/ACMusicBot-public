const {mongoose}=require("../connection")
const {musicSchema}=require("../schemaes/index/index")

const MusicModel=mongoose.model("music",musicSchema)

const newSong=async (fileId,fileName)=>{
    const existingMusic = await MusicModel.exists({ fileName: fileName });

    if(existingMusic == null){
        const music=MusicModel({
            fileId:fileId,
            fileName:fileName,
        })
        music.save()
        return true
    }else{
        return false
    }
   
}


module.exports={
    newSong
}