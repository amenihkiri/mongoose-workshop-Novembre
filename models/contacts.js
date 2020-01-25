 const mongoose=require('mongoose')
const schema=mongoose.Schema



const ContactSchema=new schema({
   name:{type:String} ,
   phone:{type:String},
   email:{type:String}
})

module.exports=Conatct=mongoose.model("contact",ContactSchema)