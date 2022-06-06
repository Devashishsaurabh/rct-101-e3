import React, { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/products").then(({data})=>{
      setProducts(data)
    })
  },[])
  return <div>
    <h1>Products</h1>
    <br />
    <br />
    <br />
    <div style={{display:"flex",gap:"20px"}}>
     {products.map((products)=>(
       <div key={products.id}{...products}/>
     ))}
    </div>
  </div>;
};

export default Products;
