//import axios from "axios";
import axiosInstance from "../API/axiosInstance";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const SetToken = (newToken) => setToken(newToken);
  const SetLoggedUser = (newUser) => {
    console.log(newUser)
    setLoggedUser(newUser)};

  const Logout = () => {
    setToken(null);
    setLoggedUser(null);
  };

  useEffect(() => {
    if (token) {
      //axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
      axiosInstance.defaults.headers.common['Authorization'] = `JWT ${token}`
      localStorage.setItem("token", token);
      localStorage.setItem('user', JSON.stringify(loggedUser))
    } else {
      //delete axios.defaults.headers.common["Authorization"];
      delete axiosInstance.defaults.headers.common['Authorization'];
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [token]);

  const ContextValue = useMemo(
    () => ({ token, SetToken, loggedUser, SetLoggedUser, Logout }),
    [token]
  );
  return (
    <AuthContext.Provider value={ContextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
