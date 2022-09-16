import './App.css';
import Todo from './todos/Todo';
import List from './todos/List';
import { useState } from 'react';
function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  const [isSetTodo, setisSetTodo] = useState(false)
  const [updateIndex ,setUpdateIndex] = useState(0)
  const AddTodo = (input) => {
    if (!input) {
      alert("Please enter Todo")
    } else {
      setTodo([...todo, input])
      setInput("")
    }

  }
  const DeleteAll = () => {
    setTodo([])
  }

  const onDelete = (index) => {
    const newList = todo.filter((val, ind) => {
      return (
        index !== ind
      )
    })
    setTodo(newList)
  }


  const editHandle = (value, index) => {
    console.log(value, index);
    setisSetTodo(true)
    setInput(value)
    setUpdateIndex(index)
    
  }

  const update = () =>{
    // const todoEdit = todo[updateIndex] = input
    
    // setTodo([...todo, input])
    const todoList = todo.map( (todo,ind)   => {
      if (ind === updateIndex ) {
        todo[updateIndex] = input
      }
    })

    // setUpdate = (updatedTitle, id) => {
    //   this.setState({
    //     todos: this.state.todos.map(todo => {
    //       if (todo.id === id) {
    //         todo.title = updatedTitle
    //       }
    //       return todo
    //     }),
    //   })
    // }
    setTodo([...todo, todoList])
    console.log(todoList);
    setInput("")
    
    setisSetTodo(false)
  }

  

  return (
    <div className="App">
      <Todo
        input={input}
        setInput={setInput}
        AddTodo={AddTodo}
        Delete={DeleteAll}
        List={todo}
        // Delete = {DeleteAll}
        // setInput = {setInput}
        onDelete={onDelete}
        editHandle ={editHandle}
        isSetTodo={isSetTodo}
        update={update}
      />
      {/* <List
      
       
      
      /> */}

    </div>
  );

}
export default App;
