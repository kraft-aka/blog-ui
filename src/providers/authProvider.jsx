import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const SetToken = (newToken) => setToken(newToken);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);

  const ContextValue = useMemo(() => ({ token, SetToken }), [token]);
  return (<AuthContext.Provider value={ContextValue}>{children}</AuthContext.Provider>)
}


export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider;