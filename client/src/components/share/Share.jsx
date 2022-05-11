
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import './share.css'
export const Share=()=>{
    return (
        <>
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/person/4.jpeg" alt="" className="shareProfileImg" />
                    <input type="text" className="shareInput" placeholder="What's in your mind?" />

                </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                    <div className='shareOptions'>
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionsText">Photo/Video</span>
                    </div>
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