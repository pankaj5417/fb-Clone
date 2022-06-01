import { useReducer } from "react";
import { createContext } from "react";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  user: null,
  isLoading: false,
  error: false,
};

export const AuthContext = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
