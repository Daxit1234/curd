const User=require("./user-model")
const express = require('express');
const router = express.Router();

router.post("/addUser",async(req,res)=>{
    const user = new User(req.body)
    await user.save();
    res.send(user);
})
router.get("/getUser",async(req,res)=>{
    const user = await User.find()
    res.send(user);
})
router.delete("/deleteUser/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.send({success:"user are deketed"});
})
router.put("/editUser/:id",async(req,res)=>{
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {new: true});
    res.send(user);
})

module.exports=router