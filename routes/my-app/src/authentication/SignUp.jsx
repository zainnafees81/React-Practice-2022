import React from 'react'
import style from '../authentication/Style.css'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signInContainer'>
    <div className='innerContainer'>
      <p className='signInHeading'>Sign Up</p>
      <p>Create your Google Account</p>
      <div className='email'>
      <h5>Email</h5>
      <input required className='SigninInput' type="text" />
    </div>
    <div>
      <h5>Password</h5>
      <input required className='SigninInput' type="text" />
    </div>
    <Link to="/"><button className='signInBtn upbtn' >Sign Up</button> </Link>

    </div>
  </div>
  )
}

export default SignUp