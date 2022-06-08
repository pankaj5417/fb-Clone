
import { EmojiEmotions, Label, LineAxisOutlined, PermMedia, Room } from '@mui/icons-material'
import { useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
import './share.css'
export const Share=()=>{
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    const [file,setFile]=useState(null)
    const desc=useRef()
const {user}=useContext(AuthContext)
//console.log("file",file.name)
const submitHandler=async(e)=>{
    e.preventDefault()
    const newPost={
        userId:user._id,
        desc:desc.current.value,
       
    }
     const data= new FormData()
     const fileName=Date.now()+file.name;
          data.append("file",file)
          data.append("name",fileName)
          data.append("userId",user._id)
          data.append("desc",desc.current.value)
         // newPost.img=fileName
          console.log("data",data)
    if(file){
    //  if(file){
    //      const data= new FormData()
    //      const fileName=Date.now()+file.name;
    //      data.append("file",file)
    //      data.append("name",fileName)
    //      newPost.img=fileName
    //     try{
    //         await axios.post("/upload",data)
    //     }catch(err){
    // console.log(err)
    //     }
    // }
    try{
        await axios.post("/posts",data,newPost)
       // window.location.reload()
    }catch(err){
        console.log(err)
    }
}
}
    return (
        <>
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture?PF+user.profilePicture:PF+`/person/noAvatar.png`} alt="" className="shareProfileImg" />
                    <input type="text" className="shareInput" placeholder={"What's in your mind "+user.firstname+" ?"} ref={desc}/>

                </div>
                <hr className='shareHr'/>
                <form action='/posts' method='POST' enctype="multipart/form-data"   onSubmit={submitHandler} className="shareBottom">
                    <div className='shareOptions'>
                    <label htmlFor='file' className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionsText">Photo/Video</span>
                        <input style={{display:"none"}} type="file" id="file" name='file' accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionsText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionsText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className="shareOptionsText">feelings/activity</span>
                    </div>

                    </div>

            <button type='submit' className="shareButton">Share</button>

                </form>

            </div>

        </div>
        </>
    )
}