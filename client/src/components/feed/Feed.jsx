import Post from "../post/Post";
import { Share } from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export const Feed = ({username}) => {
  const {user}=useContext(AuthContext)
    const [post,setPost]=useState([])
    useEffect(()=>{
      const fetchPosts=async()=>{
         const res= false?
       await axios.get("/posts/profile/"+user.firstname)
        :await axios.get("/posts/timeline/"+user._id)
        console.log("feedres",res)
        setPost(res.data)

      }
      fetchPosts()

    },[user.firstname,user._id])
   // console.log(post)
  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {post.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
};
