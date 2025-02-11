import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const[isAuth,setIsAuth]=useState("")
  const location=useLocation();
  let from =location.state?.from?.pathname||"/"
  const navigate=useNavigate()
  const login=(email,password)=>{
    axios.post("https://reqres.in/api/login",{email,password})
    .them(({data})=>{
         localStorage.setItem("token",data.token);
         setIsAuth(data.token)
    })
  }
  useEffect(()=>{
    if(isAuth){
      navigate(from,{replace:true})
    }else{
      navigate("/login")
    }
  })
const logout=()=>{
  localStorage.setItem("token","");
  setIsAuth(false)
}
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
