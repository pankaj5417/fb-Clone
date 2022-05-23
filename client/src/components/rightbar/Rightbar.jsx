import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export const Rightbar=({profile})=>{
    const PF=process.env.REACT_APP_PUBLIC_FOLDER

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
            <he className="rightbarTitle">User information</he>
            <div className="rightbarIngo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>

                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                    
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">single</span>
                    
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={`${PF}/person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John k</span>

                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}/person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John k</span>
                    
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}/person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John k</span>
                    
                </div>
            </div>
            </>
        )
    }
    return (
        <>
        <div className="rightbar">
            <div className="rightbarWrapper">
              {  profile?<ProfileRightbar />:<HomeRightbar/>}
            </div>
        </div>
        </>
    )
}