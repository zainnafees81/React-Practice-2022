import List from './List'
import './style.css'
import { useState } from 'react';


function Todo(props) {

    
    return (
        <>
            <div className='container'>
                <div>
                    <h1>Todo List Application</h1>
                </div>
                <div className='inputs-box'>
                    <input type="text" placeholder='Enter Your Todos.....'
                        title='Enter Your Todos'
                        className='input'
                        value={props.input}
                        onChange={(event) => props.setInput(event.target.value)}
                    />
                    <button className='btns  add'  onClick={() => props.isSetTodo? props.update() : props.AddTodo(props.input)}>{props.isSetTodo? "Update" : "AddTodo"}</button>

                    <button className='btns  delete ' title='Delete All Todo'
                        onClick={() => props.Delete()}>
                        Delete All</button>
                </div>
                <List
                    List={props.List}
                    Delete={props.DeleteAll}
                    setInput={props.setInput}
                    onDelete={props.onDelete}
                    editHandle={props.editHandle}

                />
            </div>

        </>
    )
}

export default Todo