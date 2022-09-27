import React from 'react'
import { Link } from 'react-router-dom'

function TodoItems(props) {


  return (
    <div className='App'>
      <ul className='nav '>


        <li><Link to="/home"> HOME </Link></li>
        <li><Link to="/list"> LIST </Link></li>
      </ul>
      <input type="text file" value={props.input} onChange={(e) => props.setInput(e.target.value)} />

     {/* <input type="file" value={props.input} onChange={(e) => props.setInput(e.target.value)}  /> */}
     <button onClick={props.Post}>post</button>

    </div>
  )
}

export default TodoItems