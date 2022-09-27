import React from 'react'
// import style from '../authentication/Style.css'
import { Link } from 'react-router-dom'
function ListItems(props) {
  return (

    <div className='containerList'>
      <ul className='nav'>


        <li><Link to="/home"> HOME </Link></li>
        <li><Link to="/list"> List </Link></li>
      </ul>
      <div className='card'>
        <div className='imgdiv'>
          <img src={props.img} alt="" className='img' />
        </div>
        <div className='titleDiv'>
          <p className='title'> title</p>
        </div>

        <div>
          <button className='cardBtn'>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default ListItems