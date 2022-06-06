const express=require("express")
const bcrypt=require('bcrypt')
const router=express.Router()
const User=require("../models/User.model")

//REGISTER

router.post("/register", async(req,res)=>{
    console.log("ready")
    try{
        const userExist=await User.findOne({email:req.body.email})
        console.log("userExist", userExist)
        if(userExist){
            return res.status(400).json({message:"User already exists"})
        }
        //generate new hashed  password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password ,salt)
        //create new user
        const newuser= await new User({
            
            firstname:req.body.firstname,
            surname:req.body.surname,
            email:req.body.email,
            dob:req.body.dob,
            gender:req.body.gender,
            password:hashedPassword
        })
        //save user and response
        const user= await newuser.save()
       return  res.status(200).json({user, message:"registration successful"})

    }catch(err){
        console.log(err)
    }
})


router.get("/register", async(req,res)=>{
    console.log("ready")
    const newuser= await new User({
        username:req.body.firstname,
        email:req.body.email,
        password:req.body.password
    })
    try{
       const user= await newuser.save()
   res.status(200).json(user)

    }catch(err){
        console.log(err)
    }
})

//login
router.post("/login",async(req, res)=>{
    try{
        console.log("before2")
        const user= await User.findOne({email:req.body.email})
        !user && res.status(404).json("user not found")

        const validPassword=await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")
          res.status(200).send(user)
    }catch(err){
        console.log(err)
    }

})
module.exports=router

