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
const multer  = require('multer')
const path=require("path")
dotenv.config()


mongoose.connect(process.env.MONGO_URL, (err)=>{
  if(err){
    console.log(err)
  }else
  console.log("Connected to MongoDB")
  
})

//middleware
app.use(cors())
app.use("/images",express.static(path.join(__dirname,"public/images")))
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use('/api/posts',postRoute)

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images')
//   },
//   filename:(req, file, cb)=> {
//     console.log("filename",req)
//      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.originalname )
//   }
// })

// const upload = multer({ storage: storage })



// app.post('/api/upload', upload.single("file"),  (req, res)=> {
//   console.log(req.file)
//   try{
//     return res.status(200).json("File uploaded successfully")
//   }catch(err){
    
//   }
// })

app.listen(port,()=>{
    console.log("server is running")
})