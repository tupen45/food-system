import axios from "axios";
import { useEffect, useState } from "react";
import Map from '../map/map';
import Header1 from "../Header/Header1";
const Account=({user})=>{

    const [data,setdata]=useState([]);

   const userid= user.map((tr)=>{
        return tr.id
    })
    const origin = { lat: 25.7403782, lng: 88.2633037 }; // Example origin location
    const destination = { lat: 25.727279, lng: 88.251282 };


    useEffect(()=>{
        let obj ={
            userid:userid[0]
           
          };
          
        
         axios.post('http://localhost:3000/order_datails',obj).then((result)=>{
  
         setdata(result.data);
          if(result.data.Status=== 'invalid'){
              alert('invalid')
              
          } alert(result.data.msg)
         }).catch(function(error){
          console.log(error);
         })
      },[]);

      
       
       
      





    return<>
    {/* <Header1></Header1> */}
   {userid[0]}
    <br></br>
 <table border="1">
    <thead>
      <tr>
        <th>product id </th>
        <th>product price </th>
        <th>delivery satatus</th>
        <th>delivery_mode</th>
      </tr>
    </thead>
    <tbody> 
        {data.map((tr1)=>{
            return <tr>
            <td>{tr1.product_id}</td>
            <td>{tr1.price}</td>
            <td>{tr1.delivery_status}</td>
            <td>{tr1.deliver_mode}</td>
          </tr>
        })}
     
     
    </tbody>
  </table>
  <h1>Map with Directions</h1>
      <Map/>
    
    
    </>
}
export default Account; 