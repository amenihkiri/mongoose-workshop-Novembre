const Contact =require('../models/contacts')
const express=require('express')
const router=express.Router()

//get
router.get("/",(req,res)=>{
    Contact.find()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

//delete
router.delete('/:id',(req,res)=>{
    const {id}=req.params
    Contact.findOneAndDelete({_id:id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))

})
// update
router.put('/:id',(req,res)=>{
 
    const{name,phone,email}=req.body
    Contact.findOneAndUpdate({_id:req.params},{$set:{name,phone,email}})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))

})
// add
router.post('/',(req,res)=>{
const{name,phone,email}=req.body
const newcontact=new Contact({
    name,
    phone,
    email
})
  newcontact.save()
  .then(contacts=>res.send(contacts))
  .catch(err=>console.log(err))

})
module.exports=router



