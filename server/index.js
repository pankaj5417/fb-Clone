const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require('dotenv')
const morgan=require('morgan')
const helmet=require('helmet')
const cors=require('cors')
const userRoute=require("./routes/user.controller")
const authRoute=require("./routes/auth.controller")
const postRoute=require('./routes/post.controller')
const port=process.env.PORT||8000

dotenv.config()

mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err){
        console.log(err)
    }else
        console.log("Connected to MongoDB")

})

//middleware
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use('/api/posts',postRoute)


app.listen(port,()=>{
    console.log("server is running")
})