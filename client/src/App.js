import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Home } from './pages/home/home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile/:username" element={<Profile/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
