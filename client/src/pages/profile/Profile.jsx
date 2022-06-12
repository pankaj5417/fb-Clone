import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Feed } from '../../components/feed/Feed'
import { Rightbar } from '../../components/rightbar/Rightbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Topbar } from '../../components/topbar/Topbar'
import './profile.css'
export default function Profile() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    const params=useParams()
    const [user,setUser]=useState({})
    useEffect(()=>{
        const fetchUser=async()=>{
          const res=await axios.get(`/users?firstname=${params.firstname}`)
          console.log("profile",res.data)
          setUser(res.data)
        }
        fetchUser()
      },[params.firstname])
      console.log("profileUser",user)

  return (
        <>
        <Topbar />
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img src={user.coverPicture?PF+user.coverPicture:PF+`/person/noCover.png`} alt="" className="profileCoverImg" />
                    <img src={user.profilePicture?PF+user.profilePicture:PF+`/person/noAvatar.png`}  alt="" className="profileUserImg" />

                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.firstname}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>

                    </div>


                </div>
                <div className="profileRightBottom">
            <Feed username={params.firstname}/>
            <Rightbar user={user}/>

                </div>

            </div>
        </div>
        </>

  )
}
