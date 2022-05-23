import {Chat, Notifications, Person, Search} from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'
import './topbar.css'
export const Topbar=()=>{

    return (
        <>
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
                        {/* <PeopleAlt className='topbarIcon'/> */}
                    <img className='topbarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"  alt="" />
                        {/* <span className="topbarListItemText">Find friends</span> */}
                    </li>
                    <li className="topbarListItem">
                        {/* <RssFeed className='topbarIcon'/> */}
                        <img className='topbarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/P82afdZb-gc.png" alt="" />

                        {/* <span className="topbarListItemText">Marketplace</span> */}
                    </li>
                   
                    <li className="topbarListItem">
                    <img className='topbarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt="" />
                        {/* <GroupsIcon className='topbarIcon'/> */}
                        {/* <span className="topbarListItemText">Groups</span> */}
                    </li>
                    
                    <li className="topbarListItem">
                        {/* <PlayCircleFilledOutlined className='topbarIcon'/> */}
                        <img className='topbarIcon' src="	https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/ob1CgXwDORG.png" alt="" />

                        {/* <span className="topbarListItemText">Watch</span> */}
                    </li>
                   </ul> 
          

            {/* </div> */}
        </div>
        <div className="topbarRight">
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">4</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className='topbarImg'/>

        </div>
    </div>
        </>
    )
}