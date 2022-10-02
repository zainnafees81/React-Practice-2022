import React, { useState } from 'react'
import Style from '../components/Style.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "../components/Firebase"

const auth = getAuth(app)
function SignUp() {
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const create = () => {
        createUserWithEmailAndPassword(auth, email, Password).then
        (value => alert("login successfully"))

    }


    return (
        <div className='signInContainer'>
            <div className='innerContainer'>
                <p className='signInHeading'>Sign Up</p>
                <p>Create your Google Account</p>
                <div className='email'>
                    <h5>Email</h5>
                    <input required className='SigninInput'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text" />
                </div>
                <div>
                    <h5>Password</h5>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                        required className='SigninInput' type="Password" />
                </div>
                <Link to="/signIn"><button className='signInBtn upbtn' 
                onClick={create}
                >Sign Up</button> </Link>

            </div>
        </div>
    )
}

export default SignUp