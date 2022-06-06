import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import {format} from "timeago.js"
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const {user:currentUser}=useContext(AuthContext)
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user,setUser]=useState([])
 const PF=process.env.REACT_APP_PUBLIC_FOLDER
 console.log(PF)
 useEffect(()=>{
   setIsLiked(post.likes.includes(currentUser._id))
 },[currentUser._id,post.likes])
  const handleLike = async() => {
    try{
      await axios.put(`/posts/${post._id}/likes`,{userId:currentUser._id})
    }catch(err){
      console.log(err)
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  useEffect(()=>{
    const fetchUser= async()=>{
      const res=await axios.get(`/users?userId=${post.userId}`)
      console.log("userres",res)
      setUser(res.data)
    }
    fetchUser()
  },[post.userId])
console.log("user",user)
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`/profile/${user.firstname}`}>
              <img
                src={
                  user.profilePicture?PF+user.profilePicture:PF+"/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
              
              </Link>
              <span className="postUsername">
                {
                user.username
              }
              </span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={PF+"/"+post.img} alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                src={`${PF}/like.png`}
                alt=""
                className="likeIcon"
                onClick={handleLike}
              />
              <img
                src={`${PF}/heart.png`}
                alt=""
                className="likeIcon"
                onClick={handleLike}
              />
              <span className="postLikeCounter">{like}</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
