const mongoose=require('mongoose')
const NameSchema=new mongoose.Schema
(
    {
        name:String
    }
)
const NameModel=mongoose.model("name",NameSchema)
module.exports=NameModel