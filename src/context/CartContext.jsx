import React, { createContext, useState,useContext} from "react";
import axios from "axios"
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems,setCartItems]=useState()
  const CartItemby=(productId)=>
  cartItems.find((item)=>item.productId===productId)||{};
  const getCartItemCount=(productId)=>{
    let item=cartItems.find((items)=>item.productId===productId)||{};
    return item.count||0
  }
  const addItemcart=async(cartInfo)=>{
    return axios.post("http://localhost:8080/cartItems",{...cartInfo})
    .then(({data})=>{
      setCartItems([...cartItems,data])
    })
  }
  const removeItemcart=async(productId)=>{
    let item=CartItemby(productId)
    if(item.id){
    return axios.delete(`http://localhost:8080/cartItems/${item.id}`)
    .then(()=>{
      let updateCartItems=cartItems.filter((cI)=>cI.id !== item.id)
      setCartItems(updateCartItems)
    })
  }}
  
  return(
     <CartContext.Provider value={{cartitemsCount:cartItems.length,cartItems,CartItemby, getCartItemCount,removeItemcart}}>{children}</CartContext.Provider>
  )

}
;
