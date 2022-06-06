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
dotenv.config()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+'-' + file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })



app.post('/api/upload', upload.single('file'), function (req, res, next) {
 try{
    return res.status(200).json("File uploaded successfully")
 }catch(err){

 }
})

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