import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom'
import { Home } from './pages/home/home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function App() {
  const {user}=useContext(AuthContext)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user?<Home/>:<Login/>}></Route>
        <Route path="/profile/:username" element={<Profile/>}></Route>
        <Route path="/login" element={user?<Navigate to="/"/>:<Login/>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
