import { useContext } from "react"
import { Feed } from "../../components/feed/Feed"
import { Rightbar } from "../../components/rightbar/Rightbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Topbar } from "../../components/topbar/Topbar"
import { AuthContext } from "../../context/AuthContext"
import './home.css'
export const Home=()=>{
    const {user}=useContext(AuthContext)
    return (
        <>
        <div className="home">
        <Topbar />
        <div className="homeContainer">
            <Sidebar/>
            <Feed username={user.firstname}/>
            <Rightbar user={user}/>
        </div>

        </div>
       
        </>
    )
}