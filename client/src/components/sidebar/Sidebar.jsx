import { Bookmark, Chat, Event, Group, HelpOutline, PeopleAlt, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'

import GroupsIcon from '@mui/icons-material/Groups';
import { Users } from '../../dummyData'
import Friend from '../friends/Friend';
import './sidebar.css'
export const Sidebar=()=>{
    return (
        <>
        <div className="sidebar">
            <div className="siebarWrapper">
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        {/* <PeopleAlt className='sidebarIcon'/> */}
                    <img className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"  alt="" />
                        <span className="sidebarListItemText">Find friends</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className='sidebarIcon'/> */}
                        <img className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/P82afdZb-gc.png" alt="" />

                        <span className="sidebarListItemText">Marketplace</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <Chat className='sidebarIcon'/> */}
                        <img className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/24MgFlPfCs5.png" alt="" />

                        <span className="sidebarListItemText">Memories</span>
                    </li>
                    <li className="sidebarListItem">
                    <img className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt="" />
                        {/* <GroupsIcon className='sidebarIcon'/> */}
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    
                    <li className="sidebarListItem">
                        {/* <PlayCircleFilledOutlined className='sidebarIcon'/> */}
                        <img className='sidebarIcon' src="	https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/ob1CgXwDORG.png" alt="" />

                        <span className="sidebarListItemText">Watch</span>
                    </li>
                    
                    <li className="sidebarListItem">
                        {/* <Bookmark className='sidebarIcon'/> */}
                        <img className='sidebarIcon' src="	https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/EygD86pCwoD.png" alt="" />

                        <span className="sidebarListItemText">Saved</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <HelpOutline className='sidebarIcon'/> */}
                        <img  className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/TbOx5lWkw-N.png" alt="" />
                        <span className="sidebarListItemText">Pages</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <Event className='sidebarIcon'/> */}
                        <img className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/qB7KME4oQ7N.png" alt="" />

                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <WorkOutline className='sidebarIcon'/> */}
                        <img className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/FotFk27Ykon.png" alt="" />

                        <span className="sidebarListItemText">Most recent</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <School className='sidebarIcon'/> */}
                        <img className='sidebarIcon' src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/6z6PkjynH7u.png" alt="" />

                        <span className="sidebarListItemText">Favourite</span>
                    </li>
                   
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                {
                       Users.map(u=>(
                           <Friend key={u.id} user={u}/>
                       ))
                   }
                   
                </ul>

            </div>
        </div>
        </>
    )
}