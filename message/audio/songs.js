const {songs}=require("../getmethods")

const resultSongs =async(text)=>{
    const songsList=await songs();
    const textlist=text.split(" ");
    let data=[];
    songsList.forEach(song => {
        let checkit=false
            if (song.fileName.toLowerCase().includes(text.toLowerCase())) {
                data.push(song)
            }
        // textlist.forEach(txt=>{
        //     if (song.fileName.toLowerCase().includes(txt.toLowerCase())) {
        //         checkit=true
        //     }
        // })
        // if (checkit) {
        //     data.push(song)
        // }


    });
    return data
}

module.exports={
    resultSongs
}