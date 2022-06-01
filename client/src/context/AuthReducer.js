import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./AuthActionType";

export const AuthReducer=(state,action)=>{
    switch(action.type){
        case LOGIN_START :
            return {
                user:null,
                isLoading:true,
                error:false
            }
            case LOGIN_SUCCESS :
                return {
                    user:action.payload,
                    isLoading:false,
                    error:false
                }

                case LOGIN_FAILURE :
                    return {
                        user:null,
                        isLoading:false,
                        error:true
                    }
                    default :
                    return state
    }
}