import axios from "axios"
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./context/AuthActionType"

export const loginCall= async (userCredentials, dispatch)=>{
    dispatch({type:LOGIN_START})
    try{
        const res=await  axios.post("/auth/login", userCredentials)
        console.log(res)
        dispatch({type:LOGIN_SUCCESS, payload:res.data})

    }catch(err){
        dispatch({type:LOGIN_FAILURE, payload:err})
    }
}