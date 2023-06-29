
import "./Container.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams} from "react-router-dom";


const Constr1=({handleclick})=>{
    
      
    const [image ,setImage]=useState([]);
    useEffect(()=>{
        axios.get('https://node-api-o269.onrender.com/photo',).then((resonse)=>{
            
            setImage(resonse.data);
         });

    },[])
    
     
    // <Link to='/Cart'><img src={`http://localhost:3000/image/${ef.file_src}`}
    

    return(<>

    <div className="container">
    
            {
                image.map((ef)=>{
                  return <>  
                  <div class="card">

<div class="imgBox">
  <img src={`https://node-api-o269.onrender.com/image/${ef.file_src}`} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>{ef.name}</h3>
  <h2 class="price">{ef.price}<small></small></h2>
  <button class="buy" onClick={()=>handleclick(ef)}>Buy Now</button>
</div>

</div>
                  
                  
                  
                  </>
                })
            }
         
         </div>
    </>)
}
export default Constr1;     