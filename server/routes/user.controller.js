const express=require("express")
const User = require("../models/User.model")
//const { route } = require("./auth")
const bcrypt=require('bcrypt')

const router=express.Router()



//update user

router.put("/:id", async(req,res)=>{
    if(req.body.userId===req.params.id||req.body.isAdmin ){
      if(req.body.password){
          try{
              const salt= await bcrypt.genSalt(10)
              req.body.password= await bcrypt.hash(req.body.password, salt)
          }catch(err){
              return res.status(500).json(err)
          }
      }
      try{
          const user=await User.findByIdAndUpdate(req.params.id,{$set:req.body})

          return res.status(200).json("Account has been updated ")
      }catch(err){
         // console.log(err)
          return res.status(403).json("something wrong")

      }
    }else{
        return res.status(403).json("You can update only your account")
    }
})

//delete user
router.delete("/:id", async(req,res)=>{
   
      if(req.body.userId===req.params.id||req.body.isAdmin){

          try{
              const user=await User.findByIdAndDelete(req.params.id)
    
             return res.status(200).json("Account has been deleted")
          }catch(err){
             // console.log(err)
              return res.status(500).json(err)
    
          }
        
      }  else{
          return res.status(403).json("you can delete only your account")
      }
})

//get a user

router.get("/", async(req,res)=>{
    const userId=req.query.userId;
    const username=req.query.username
    try{
        const user=userId?await User.findById(userId):await User.findOne({username:username})
        const {password,updatedAt,isAdmin,...other}=user._doc
         return res.status(200).json(other)
    }catch(err){
        return res.status(500).json(err)
    }
})


//get friends

router.get("/friends/:userId", async(req, res)=>{
    try{
        const user= await User.findById(req.params.userId);
        const friends= await Promise.all(user.following.map(friendId=>{
            return User.findById(friendId)
        }))

        let friendList=[];
        friends.map(friend=>{
            const {_id,firstname,profilePicture}=friend;
         friendList.push({_id,firstname,profilePicture})
        })
    }catch(err){
        return res.status(400).json(err)
    }
})

//follow user

router.put("/:id/follow", async(req,res)=>{
    if(req.body.userId!==req.params.id){
        try{
         const user= await User.findById(req.params.id)
         const currentUser=await User.findById(req.body.userId)
         if(!user.followers.includes(req.body.userId)){
             await user.updateOne({$push:{followers:req.body.userId}})
             await currentUser.updateOne({$push:{following:req.params.id}})
         }else{
             return res.status(200).json({user:user,currentuser:currentUser,message:"user has been followed"})
         }
        }catch(err){
            return res.status(500).json(err)
        }

    }else
    return res.status(403).json("You cannot follow yourself")

})


//unfollow user

router.put("/:id/unfollow", async(req,res)=>{
    if(req.body.userId!==req.params.id){
        try{
         const user= await User.findById(req.params.id)
         const currentUser=await User.findById(req.body.userId)
         if(user.followers.includes(req.body.userId)){
             await user.updateOne({$pull:{followers:req.body.userId}})
             await currentUser.updateOne({$pull:{following:req.params.id}})
         }else{
             return res.status(200).json("user has been unfollowed")
         }
        }catch(err){
            return res.status(500).json(err)
        }

    }else
    return res.status(403).json("You cannot unfollow yourself")

})

module.exports=router

