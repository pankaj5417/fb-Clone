
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import { useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './share.css'
export const Share=()=>{
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    const [file,setFile]=useState(null)
    const desc=useRef()
const {user}=useContext(AuthContext)
    return (
        <>
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture?PF+user.profilePicture:PF+`/person/noAvatar.png`} alt="" className="shareProfileImg" />
                    <input type="text" className="shareInput" placeholder={"What's in your mind "+user.firstname+" ?"} />

                </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                    <div className='shareOptions'>
                    <label htmlFor='file' className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionsText">Photo/Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])} />
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

            <button className="shareButton">Share</button>

                </div>

            </div>

        </div>
        </>
    )
}