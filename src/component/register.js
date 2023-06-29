import React, { useState } from "react";
import axios from "axios";
const Register=()=>{
    const [username ,setEame] =useState("");
    const [password, setPassword]= useState("");
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setEame(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    

    };
    const handleSubmit=()=>{
       
        let obj ={
            username:username,
            password:password,
        };
        console.log(username);
    
       axios.post('http://localhost:3000/register',obj).then((result)=>{
        if(result.data.Status=== 'invalid'){
            alert('invalid')
        } alert(result.data.msg)
       }).catch(function(error){
        console.log(error);
       })
    };
    const handleSubmit1=()=>{
       
        let obj ={
            username:"raju",
            
        };
       axios.post('http://localhost:3000/shutdown',obj).then((result)=>{
        if(result.data.Status=== 'invalid'){
            alert('invalid')
        }
        alert(result.data.msg)
       }).catch(function(error){
        console.log(error);
       })
    };
   
return(<>
<form >
    
    <input type='text' name="username" placeholder="username" id ="username" onChange={(e)=>handleInputChange(e)} /><br/>
    
    <input type='password ' name="password" placeholder="password " id ="password" onChange={(e)=>handleInputChange(e)} /><br/>
    <input type='button' value='register' onClick={()=>{handleSubmit()}} />

</form>

</>);
}
export default Register;