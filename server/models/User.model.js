const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
//     userId:{
//   type:mongoose.Types.ObjectId,
//     },
    firstname:{
        type:String,
        required:true,
        min:3,
        max:50,
        default:""
    },
    surname:{
        type:String,
        min:3,
        max:50,
        default:""
    },
    email:{
        type:String,
        required:true,
        max:50,
       
    },

    password:{
        type:String,
        required:true,
        min:6
    },
    dob:{
        type:String,
        required:true,
        
    },
    gender:{
        type:String,
        required:true,
    },
   
    profilePicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]

    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }


},
{
    timestamps:true
}
)

module.exports=mongoose.model("users",userSchema)