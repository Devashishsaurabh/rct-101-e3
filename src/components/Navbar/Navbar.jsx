import React,{useContext} from "react";
import { Link ,useNavigate, NavLink} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


const Navbar = () => {
const{isAuth,logout}=useContext(AuthContext)
const navigate=useNavigate()
const{cartitemsCount}=useContext(CartContext)

const handleonclick=()=>{
  if(isAuth){
    logout()
  }else{
    navigate("/login")
  }
}
  return (
    <div data-cy="navbar" style={{display:"flex",gap:"20px" ,border:"1px solid red"}}>
      <div>
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      </div>
      <span data-cy="navbar-cart-items-count">cart:{cartitemsCount && `(${cartitemsCount})`}</span>
      <button data-cy="navbar-login-logout-button" onclick={handleonclick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
