import React from 'react'
import {Link, Navigate} from 'react-router-dom'


function Home() {
 const logOut = ()=>{
  localStorage.clear('login', false)
        Navigate('/signIn')
 }
  return (
    <>
    <ul>
      <h3>Home</h3>
      <Link to="/List"><li>List</li></Link>
    </ul>
    <Link to="/List"><button onClick={logOut}>Logout</button></Link>
    
    </>
  )
}

export default Home