import { useState } from 'react'
import Register from './Register'
import './login.css'
import { useRef } from 'react'
import { loginCall } from '../../apiCalls'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@mui/material'
export default function Login() {
    const [open,setOpen]=useState(false)
    const openModal=(e)=>{
        e.preventDefault()
        setOpen(true)
    }
    const email=useRef()
    const password=useRef()
    const {user,isLoading,error,dispatch}=useContext(AuthContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        loginCall({email:email.current.value,password:password.current.value},dispatch)
    }
    console.log("user",user)
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
                <form className="loginBox" onSubmit={handleSubmit}>
                    <input type="email" required className="loginInput" placeholder='Email Address or Phone number' ref={email} />
                    <input  type="password" required className="loginInput" placeholder='Password' ref={password}/>
                    <button type='submit' className='loginButton'>{isLoading?<CircularProgress />:"Log In"}</button>
                    <span className="loginForgot">Forgotten password?</span>
                    <hr />
                    <button onClick={openModal} className="loginRegisterButton cursor">Create New Account</button>

                </form>
            </div>
        </div>


    </div>
    {
        open? <Register open={open} setOpen={setOpen}/>
   :""
    }
      </>
  )
}
