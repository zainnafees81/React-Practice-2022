import React from 'react'
import style from '../authentication/Style.css'
import { Link } from 'react-router-dom'
function SignIn() {
  return (
    <div className='signInContainer'>
      <div className='innerContainer'>
        <p className='signInHeading'>Sign in</p>
        <p>Use your Google Account</p>
        <div className='email'>
        <h5>Email</h5>
        <input required className='SigninInput' type="text" />
      </div>
      <div>
        <h5>Password</h5>
        <input required className='SigninInput' type="text" />
      </div>
      <div className='btnDiv'>
      <p className='forget'>Forget Password</p>
      <Link to="/SignUp"><p className='createAccount'>Create Account</p> </Link>
    
      </div>
      <Link to="/home"> <button className='signInBtn'>Sign In</button> </Link>
      
      </div>
    </div>
  )
}

export default SignIn