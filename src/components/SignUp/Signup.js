import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../SignUp/signup.css";

export const Signup = () => {

  let navigate = useNavigate()

  function goTOsignIn(){
    navigate("/")
  }

  return (
    <div className='sinDiv' >
      
      <div className='BGimg'></div>
     
    <div className="container" id='sin_container'>
        <h3>Create your account</h3>
        <p>Created by developers for developers</p>
        <div className="login-register-wrapper" id='sin_resister'> 
            <input placeholder='name' id='sin_inputname' /> <br />
            <input placeholder='email' type="password" id='sin_inputpass' /><br />
            <input placeholder='password' type="password" id='sin_inputpass' /><br />
            <button id='sin_inputbtn'>Sign up</button>  <br />
           <input type="checkbox"  id='sin_inputcheckbox'/> I agree the terms & conditions.
           <p>Already have an aacocount? <button id='sin_signbtn' onClick={goTOsignIn}>sign in</button> </p> 
        </div>
        
    </div>
    </div>
  )
}

export default Signup;
