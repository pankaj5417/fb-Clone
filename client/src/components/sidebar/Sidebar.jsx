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
                        <PeopleAlt className='sidebarIcon'/>
                        <span className="sidebarListItemText">Find friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon'/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className='sidebarIcon'/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon'/>
                        <span className="sidebarListItemText">Courses</span>
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