import {Chat, Notifications, Person, Search} from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import './topbar.css'
export const Topbar=()=>{
    const {user}=useContext(AuthContext)
   const PF=process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
        <div className='topbar'>

    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
                <img className="logo" src="https://www.pngplay.com/wp-content/uploads/3/Blue-Facebook-Logo-Transparent-Free-PNG.png" alt="" />
            {/* <span className="logo">facebook</span> */}

            </Link>
            <div className="searchbar">

            <Search className='searchIcon'/>
            <input type="text" className="searchInput" placeholder='Search for friend,post or video'/>
            </div>

        </div>
        <div className="topbarCenter">
            {/* <div className="topbarLinks"> */}
           {/* <span className="topbarLink">Home</span>  */}
          <ul className="topbarList">
                 <li className="topbarListItem">
                

                    <img className='topbarIcon' src="https://cdn-icons-png.flaticon.com/128/813/813670.png"  alt="" />
                        {/* <span className="topbarListItemText">Find friends</span> */}
                    </li>
                <li className="topbarListItem">
                        {/* <PeopleOutlineIcon className='topbarIcon'/> */}
                     <img className='topbarIcon' src="https://www.vhv.rs/dpng/d/500-5001952_png-file-svg-white-friend-request-icon-transparent.png"  alt="" />
                        {/* <span className="topbarListItemText">Find friends</span> */}
                    </li>
                    <li className="topbarListItem">
                        {/* <RssFeed className='topbarIcon'/> */}
                        <img className='topbarIcon' src="https://cdn.iconscout.com/icon/free/png-256/facebook-watch-4560241-3789515.png" alt="" />

                        {/* <span className="topbarListItemText">Marketplace</span> */}
                    </li>
                   
                    <li className="topbarListItem">
                    <img className='topbarIcon' src="https://static.thenounproject.com/png/3498420-200.png" alt="" />
                        {/* <GroupsIcon className='topbarIcon'/> */}
                        {/* <span className="topbarListItemText">Groups</span> */}
                    </li>
                    
                    <li className="topbarListItem">
                        {/* <PlayCircleFilledOutlined className='topbarIcon'/> */}
                        <img className='topbarIcon' src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147831713/settings_images/hosxrIHaTPuIqnH46rTj_group-icon.png" alt="" />

                        {/* <span className="topbarListItemText">Watch</span> */}
                    </li>
                   </ul> 
          

            {/* </div> */}
        </div>
        <div className="topbarRight">
            <div className='topbarProfile'>
            <Link to={`/profile/${user.firstname}`}>
              <img
                src={
                  user.profilePicture?PF+user.profilePicture:PF+"/person/noAvatar.png"
                }
                alt=""
                className="topbarImg"
              />
              
              </Link>
            {/* <img src={user.profilePicture?PF+user.profilePicture:PF+"/person/noAvatar.png"} alt="" className='topbarImg'/> */}
            <span style={{color:"black"}}>{user.firstname} </span>

            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <img style={{marginTop:"5px",width:"30px"}} src="https://icon-library.com/images/dots-icon/dots-icon-5.jpg" alt="" />
                    {/* <Chat style={{backgroundColor:"black",marginTop:"5px"}}/> */}
                   
                </div>
                <div className="topbarIconItem">
                    <img style={{marginTop:"9px",width:"20px"}} src="https://image.similarpng.com/very-thumbnail/2021/01/Black-facebook-messenger-icon-on-transparent-background-PNG.png" alt="" />
                    {/* <Chat style={{backgroundColor:"black",marginTop:"5px"}}/> */}
                    <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarIconItem">
                    <img style={{marginTop:"0px",width:"37px"}} src="https://www.shareicon.net/data/2017/05/26/886472_message_512x512.png" alt="" />
                    {/* <Notifications style={{backgroundColor:"black",marginTop:"5px"}}/> */}
                    <span className="topbarIconBadge">4</span>
                </div>
                <div className="topbarIconItem">
                <img style={{marginTop:"5px",width:"37px"}} src="https://e7.pngegg.com/pngimages/709/981/png-clipart-computer-icons-arrow-drop-down-list-down-arrow-angle-rectangle.png" alt="" />

                    {/* <Person style={{backgroundColor:"black",marginTop:"5px"}}/> */}
                   
                </div>
            </div>

        </div>
    </div>
        </div>
        </>
    )
}