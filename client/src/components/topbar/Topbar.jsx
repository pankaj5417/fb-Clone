import {Chat, Notifications, Person, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './topbar.css'
export const Topbar=()=>{

    return (
        <>
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">facebook</span>

            </Link>

        </div>
        <div className="topbarCenter">
            <div className="searchbar">

            <Search className='searchIcon'/>
            <input type="text" className="searchInput" placeholder='Search for friend,post or video'/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
           <span className="topbarLink">Home</span> 
           <span className="topbarLink">Timeline</span> 

            </div>
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