import React, { useState } from 'react'
import Style from '../components/Style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../components/Firebase"

const auth = getAuth(app)


function SignIn() {

    const UserSign = ()=>{
        signInWithEmailAndPassword(auth , email , Password).then(()=>{
            localStorage.setItem('login', true)
        navigate('/')
        }).catch((err) =>alert("Please Enter your correct email/password"))
    }

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    // const SignIn = () => {
    //     localStorage.setItem('login', true)
    //     navigate('/')
    // }
    const navigate = useNavigate()
    useEffect( () =>{
        let signIn = localStorage.getItem('login')
        if(signIn){
            navigate('/')
        }
    })

    return (
        <div className='signInContainer'>
            <div className='innerContainer'>
                <p className='signInHeading'>Sign in</p>
                <p>Use your Google Account</p>
                <div className='email'>
                    <h5>Email</h5>
                    <input required className='SigninInput'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text" />
                </div>
                <div>
                    <h5>Password</h5>
                    <input required className='SigninInput' 
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    type="Password" />
                </div>
                <div className='btnDiv'>
                    <p className='forget'>Forget Password</p>
                    <Link to="/SignUp"><p className='createAccount'>Create Account</p> </Link>

                </div>
                 <button onClick={UserSign} className='signInBtn'>Sign In</button> 

            </div>
        </div>
    )
}

export default SignIn