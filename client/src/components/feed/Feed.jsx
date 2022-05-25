import Post from "../post/Post";
import { Share } from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
export const Feed = () => {
    const [post,setPost]=useState([])
    useEffect(()=>{
      const fetchPosts=async()=>{
       const res= await axios.get("/posts/timeline/62712ed7679a2f5fd7a2d132")
       console.log("feedres",res)
       setPost(res.data)

      }
      fetchPosts()

    },[])
   // console.log(post)
  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {post.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
};
