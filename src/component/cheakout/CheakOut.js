import { useState,useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


const CheakOut=({user1,cartItem})=>{


    

// console.log(result);



// function isDate(val) {
//     // Cross realm comptatible
//     return Object.prototype.toString.call(val) === '[object Date]'
//   }
  
//   function isObj(val) {
//     return typeof val === 'object'
//   }
  
//    function stringifyValue(val) {
//     if (isObj(val) && !isDate(val)) {
//       return JSON.stringify(val)
//     } else {
//       return val
//     }
//   }
  
//   function buildForm({ action, params }) {
//     const form = document.createElement('form')
//     form.setAttribute('method', 'post')
//     form.setAttribute('action', action)
  
//     Object.keys(params).forEach(key => {
//       const input = document.createElement('input')
//       input.setAttribute('type', 'hidden')
//       input.setAttribute('name', key)
//       input.setAttribute('value', stringifyValue(params[key]))
//       form.appendChild(input)
//     })
  
//     return form
//   }
//   function post(details) {
//     const form = buildForm(details)
//     document.body.appendChild(form)
//     form.submit()
//     form.remove()
//   }


    
// const getData=(data)=>
// {

// return fetch(`http://localhost:3000/api10/payment`,{
//     method:"POST",
//     headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify(data)
// }).then(response=>response.json()).catch(err=>console.log(err))
// }



// const makePayment=()=>
// {
// getData({amount:result,email:'abc@gmail.com'}).then(response=>{
// console.log(response);

// var information={
//     action:"https://securegw.paytm.in/order/process",
//     params:response
// }
// post(information)

// })
// }


const result1 = user1.reduce((total, currentValue) => total = total + currentValue.id,0);
const [Pincode,Setpincode]=useState('');
const [Villege,Setvillege]=useState('');
const [dataList,setdatalist]=useState([]);
const [show ,setshow]=useState(true);



const t1=dataList.map((tt=>{return tt.userid}));
const productid=cartItem.map((tt=>{return tt.id}))








let ab1c={
    userid:result1
}

useEffect(()=>{
    axios.post('http://localhost:3000/getdata',ab1c).then((resonse)=>{
        
        setdatalist(resonse.data);
       if(t1>0)
       setshow(false)
        
     });

},[t1>0]);





const handleInputChange = (e) => {
  const {id , value} = e.target;
  if(id === "villege"){
      Setvillege(value);
  }
  if(id === "pincode"){
      Setpincode(value);
  }


};

const data= dataList.map((ttr)=>{
    return <>{ttr.village}</>
})
const pncd= dataList.map((ttr)=>{
    return <>{ttr.pincode}</>
})
const [deliverymode,setdeliverymode]=useState('');

const Deliverymode=()=>{
    setdeliverymode("cash_on_delivery");

}
const date=new Date().toLocaleString() + "";
const navigate =useNavigate();
const handleSubmit2=()=>{

let data_order={
    userid:result1,
    product_id:productid[0],
    price:result1,
    deliver_mode:deliverymode,
    delivery_status:"not delivery yet",
    delivery_date:date


}
axios.post('http://localhost:3000/order123',data_order).then((result)=>{
    if(result.data.Status==='invalid'){
        alert('invalild')
        
    }else{
        navigate('/account')
    }
    alert(result.data.msg)
}).catch(function(error){
    console.log(error);
});
};





const handleSubmit=()=>{
 
       
  let obj ={
    userid:result1,
    village:Villege,
    pincode:Pincode
  };
  

 axios.post('http://localhost:3000/orders',obj).then((result)=>{
  if(result.data.Status=== 'invalid'){
      alert('invalid')
  } alert(result.data.msg)
 }).catch(function(error){
  console.log(error);
 })
};







    return(<>
    <div>
    <h1>cheakout page </h1></div>
    <div>
        <div>
            <h2>adreess</h2>
            
            <div>
               <h9>{data}</h9><br></br>
              <h9>{pncd}</h9>     
              {/* <h1>{t1}{us}</h1> */}
              
              
                
             { show &&  <form >
             
                <input type='text' name="villege"   id="villege" placeholder="village" onChange={(e)=>handleInputChange(e)} /><br></br> 
                 <input type="text" name="pincode" id="pincode" placeholder="pincode "  onChange={(e)=>handleInputChange(e)}/><br></br>
                 <input type="button" name="submit" onClick={()=>handleSubmit()} placeholder="add address" value="add address"/><br></br>
                 </form>
                 }
                 </div>
        </div>
        <div>
            <h3>payment mode</h3>
            <div>
            
  
  <input type="radio" id="html" name="fav_language" value="upi payment"/>
<label for="html">Upi payment</label><br></br>
  
  <input type="radio" id="css" name="fav_language" value="cash on delivery" onClick={()=>Deliverymode()}/>
<label for="html">cash on delivery </label><br></br><br></br>
<input type="button" name="placed order" value="placed order" onClick={()=>handleSubmit2()}/><br></br>
  
{/*    <button onClick={makePayment}>PAY USING PAYTM</button> */}
  

  
            </div>
          
        </div>
    </div>
    <h2>
       
{user1.map((tp=>{return<>{tp.id}</>}))}<br></br>
{cartItem.map((t1)=>{return<>{t1.id}</>})}

      
      
        
    </h2><br></br>
    <h2>
      
    </h2>
    </>)
}
export default CheakOut;