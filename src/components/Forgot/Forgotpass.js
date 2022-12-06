import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Forgot/forgotpass.css"
import forgotpass from "../Forgot/forgotpass.png"


 
export const Forgotpass = () => {
   
  const [data,setdata] = useState("")

  let navigate= useNavigate()

  function bar(){
    localStorage.setItem("email",data)
    navigate("/email")
  }



  return (
   <div className='forDiv'>
    
    <div className="container">
     
      <img src={forgotpass} alt='' className='pass_img' />
        <h3>Forgot password</h3>
        <p>Please enter your resisterd email address.<br/> we'll send insrtuctions to reset your password</p>
        <div className="login-register-wrapper"> 
            
            <input placeholder='email' type="password" className='inputpass' onChange={(e)=>{setdata(e.target.value)}}  /><br />
            
            
            <button className=' inputbtn' onClick={bar}>Send the reset instructions</button>  <br />
        </div>
      
    </div>
    </div>
    
  )
}


export default Forgotpass;