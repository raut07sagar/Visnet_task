import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Login/login.css";

export const Login = () => {

  let navigate = useNavigate();

  function foo(){
    navigate("/signup")
  }

  function gotoForgot(){
    navigate("/forgot")
  }

  return (
    <div className='loginDiv'>
     
      <div className='login__img'></div>
     
    <div className="container" id='loginid'>
        <h3>Sign in</h3>
        <p>Login to manage your account</p>
        <div className="login-register-wrapper" id='login_restiger'> 
            <input placeholder='name' id='Login_inputname'  /> <br />
            <input placeholder='password' type="password" id='Login_inputpass' /><br />
            <button id ='Login_inputbtn'>Sign in</button>  <br />
           <input type="checkbox"  id=' Login_inputcheckbox'/> remember me
           <p>dont have aacocount? <button id='Login_signbtn' onClick={foo}>sign up</button> </p> 
           <button  id='Login_signbtn' onClick={gotoForgot}>forgot password?</button>
        </div>


    </div>
  
    </div>
  )
}


export default Login;