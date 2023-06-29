import userEvent from "@testing-library/user-event";

import { useEffect } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../Header/Header1";
import Register from "../register";
import  "./cart.css";

const Cart=({cartItems ,user})=>{
    const navigate =useNavigate();
    console.log(user);
    
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/Sign');
        }
       
            
    },[]);
  
    return(
       <>   <div class="shopping-cart">
       {/* <!-- Title --> */}
       <div class="title">
         Shopping Bag
       </div>
      
       {/* <!-- Product #1 --> */}
       <div class="item">
         <div class="buttons">
           <span class="delete-btn"></span>
           <span class="like-btn"></span>
         </div>
      
    
        {/* {
        cartItems.map((item)=>{
            return <>
            {item.id}
            <img src={`http://localhost:3000/image/${item.file_src}`} key={item.id} height='100px' width='100px' /> */}
         
    <div class="image">
      {cartItems.map((item)=>{
            return <>
            
            <img src={`http://localhost:3000/image/${item.file_src}`} key={item.id} height='100px' width='100px' />
            </>})}
    </div>
 
    <div class="description">
      <span>{cartItems.map((item2=>{return <>{item2.name}</>}))}</span>
      
    </div>
 
    
      {/* <button class="plus-btn" type="button" name="button">
        <img src="plus.svg" alt="" />
      </button> */}
      {/* <input type="text" name="name" value="1"/> */}
      {/* <button class="minus-btn" type="button" name="button">
        <img src="minus.svg" alt="" />
      </button> */}
    
    {cartItems.map((price=>{ return<><div class="quantity"></div><div class="total-price">{price.price}</div></>}))}
    
  </div>
  </div>

            {/* </>
        })
       } */}
       < input type="button" value='cheakout' />
      {
        user.map((item1)=>{
            return<><br></br>{item1.id}<br></br>
            {item1.username}<br></br>
            </>
        })
      }
  
        
       </>
    )
}
export default Cart;