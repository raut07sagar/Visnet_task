import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Email/Email.css";
import pic from "../Email/pic.png";



export const Email = () => {

  let  navigate = useNavigate()

  function foo(){
    navigate("/")
  }

  return (<>
  <div className='emailDiv'>
 <h4 onClick={foo}>back to main</h4>

    <div className="container">
 
    <img src={pic} alt='' className='email_img' />
      <h3>Email instructions sent.</h3>
      <p>Please follow the instructions we sent to your inbox</p>
      <p style={{color:"red"}}>{localStorage.getItem("email")}</p>
      
  </div>
  </div>
  </>
  )
}

export default Email;
