import { useState } from 'react'
import Register from './Register'
import './login.css'
export default function Login() {
    const [open,setOpen]=useState(false)
    const openModal=()=>{
        setOpen(true)
    }
  return (
      <>
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">facebook</h3>
                <span className="loginDesc">

                Facebook helps you connect and share with the people in your life.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className="loginInput" placeholder='Email Address or Phone number' />
                    <input type="text" className="loginInput" placeholder='Password'/>
                    <button className='loginButton'>Log In</button>
                    <span className="loginForgot">Forgotten password?</span>
                    <hr />
                    <button onClick={openModal} className="loginRegisterButton cursor">Create New Account</button>

                </div>
            </div>
        </div>


    </div>
    {
        open?<Register open={open} setOpen={setOpen}/>
   :""
    }
      </>
  )
}
