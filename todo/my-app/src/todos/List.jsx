import React from 'react'
import './style.css'


function List(props) {



  return (
    <div className='todos-list'>



      <table className='table'
      >
        {props.List.map(function (value, index) {
          return (
            <tr>
              <td colSpan="4" className='todos' >{value}</td>
              <td><button className='todos-btn' onClick={() => props.onDelete(index)}  >Delete</button> </td>
              <td><button className='todos-btn ' onClick={() =>props.editHandle(value, index)}>Edit</button> </td>
            </tr>
          )
        })}

      </table>




    </div>
  )
}

export default List