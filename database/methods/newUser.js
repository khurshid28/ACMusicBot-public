const {mongoose}=require("../connection")
const {userSchema}=require("../schemaes/index/index")

const UserModel=mongoose.model("user",userSchema)

const newUser=async (userId,userName)=>{
    const existingUser = await UserModel.exists({ userId: userId });

    if(existingUser == null){
        const user=UserModel({
            userId:userId,
            userName:userName,
        })
        user.save()
        return true
    }else{
        return false
    }
   
}


module.exports={
    newUser
}
