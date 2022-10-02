import React from 'react'
import { Link, Navigate } from 'react-router-dom'

function List(props) {

  const logOut = ()=>{
    localStorage.clear('login', false)
          Navigate('/signIn')
  }    
  return (

    <>
      <h3>List</h3>
      <ul>
        <Link to="/"><li>Home</li></Link>
      </ul>
    <Link to="/List"><button onClick={logOut}>Logout</button></Link>

    </>

  )
}

export default List