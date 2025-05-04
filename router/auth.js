const express= require("express");
const router= express.Router();

require('../db/cone');
const User= require('../models/userSchema')

router.get('/',(req,res)=>{
    res.send("This is router home")
})

router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.send('my post page');
    // res.send(req.body)
    // res.json(req.body)
    const {namee,email,phone,work,password,cpassword}=req.body;
    if(!namee || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"please check value properly"})
    }

    User.findOne({email: email}).then((userexist)=>{
        if(userexist){
            return res.status(422).res.json({error:"Email alredy exist"})
        }
        const user= new User({namee,email,phone,work,password,cpassword})
        user.save().then(()=>{
            res.status(201).json({message:"succesfully data added"})
        }).catch((err)=>res.status(500).json({err:"data not registered"}))
    }).catch((err)=>console.log(err))
    
})

module.exports=router;