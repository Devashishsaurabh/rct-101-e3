import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
const [loginc,setLoginc]=useState({
  email:"eve.holt@reqres.in",
  password:"cityslicka"})
  const{login}=useContext(AuthContext)
  const handleonchange=(e)=>{
    const{name,value}=e.target;
    setLoginc({...loginc,[name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(loginc.email&&loginc.password){
      login(loginc.email,loginc.password)
    }
  }
  return ( 
    <div>
      <form onSubmit={handlesubmit}>
      <input type="email" name="email" placeholder="Enter Email "value={loginc.email} onchange={handleonchange}data-cy="login-email" />
      <input type="password"name="password" placeholder="Enter Password" value={loginc.password} onchange={handleonchange} data-cy="login-password" />
      <button type="submit" data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
