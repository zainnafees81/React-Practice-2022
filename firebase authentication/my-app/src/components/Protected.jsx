import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {
    const { Component} = props
    const navigate = useNavigate()
    useEffect(() =>{
        let signIn = localStorage.getItem('login')
        if(!signIn) {
            navigate('/signIn')
        } 
    })

  return (
    <>
    <Component />
    </>
  )
}

export default Protected