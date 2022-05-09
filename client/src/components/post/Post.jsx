
import { MoreVert } from '@mui/icons-material'
import './post.css'

export default function Post() {
  return (
   
    <>
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Safak</span>
                    <span className="postDate">5 mins ago</span>

                </div>
                <div className="postTopRight">
                    <MoreVert/>

                </div>
            </div>
            <div className="postCenter">

            </div>
            <div className="postBottom">

            </div>
        </div>
    </div>
    </>
  )
}
