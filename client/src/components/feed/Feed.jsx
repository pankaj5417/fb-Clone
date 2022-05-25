import Post from "../post/Post";
import { Share } from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
export const Feed = ({username}) => {
    const [post,setPost]=useState([])
    useEffect(()=>{
      const fetchPosts=async()=>{
        const res= username?
       await axios.get("/posts/profile/"+username)
       :await axios.get("/posts/timeline/62764aec58d83d0dd0a95364")
       console.log("feedres",res)
       setPost(res.data)

      }
      fetchPosts()

    },[username])
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
