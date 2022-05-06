const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require('dotenv')
const morgan=require('morgan')
const helmet=require('helmet')

const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err){
        console.log(err)
    }else
        console.log("Connected to MongoDB")

})

//middleware

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)


app.listen(8000,()=>{
    console.log("server is running")
})