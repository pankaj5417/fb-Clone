import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@mui/icons-material'
export const Rightbar=(user)=>{
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    console.log("user",user)
const [friends, setFriends]=useState([])
const [followed,setFollowed]=useState(false)
const {user:currentUser}=useContext(AuthContext)

useEffect(()=>{
    setFollowed(currentUser.following.includes(user._id))
},[currentUser,user._id])
    useEffect(()=>{
        const getFriends=async()=>{
            try{
                const friendList=await axios.get("/users/friends/"+user._id)
                setFriends(friendList.data)
            }catch(err){

            }
        }
        getFriends()
    },[user._id])

    const followUser=()=>{
        try{

        }catch(err){
            console.log(err)
        }
    }

    const HomeRightbar=()=>{
        return (
            <>
            <div className="birthdayContainer">
                    <img src={`${PF}/gift.png `} alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b>and<b>3 other friends</b>have birthday today
                    </span>

                </div>
                <img src={`${PF}/ad.png`} alt="" className="rightbarAd" />
                <h4 className='rightbarTitle'>Online friends</h4>
                <ul className="rightbarFriendList">
                   {
                       Users.map(u=>(
                           <Online key={u.id} user={u}/>
                       ))
                   }
                </ul>
            </>
        )
    }


    const ProfileRightbar=()=>{
        return (
            <>
            {user.firstname!==currentUser.firstname && (
                <button onClick={followUser} className='rightbarFollowButton'>{followed?"Unfollow":"Follow"}{followed?<Remove/>:<Add/>}</button>
            )}
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarIngo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>

                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                    
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relationship===1?"Single":user.realtionship===2?"Married":""}</span>
                    
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                {friends.map(friend=>(
                    <Link style={{textDecoration:"none"}} to={"/profile/"+friend.firstname}>
                        <div className="rightbarFollowing">
                            <img src={friend.profilePicture?PF+friend.profilePicture:PF+"/person/noAvatar"} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">{friend.firstname}</span>
        
                        </div>
                       
                    </Link>

                ))}
            </div>
            </>
        )
    }
    return (
        <>
        <div className="rightbar">
            <div className="rightbarWrapper">
              {  user?<ProfileRightbar />:<HomeRightbar/>}
            </div>
        </div>
        </>
    )
}