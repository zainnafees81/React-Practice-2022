
import './App.css';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import TodoItems from './authentication/TodoItems';
import ListItems from './authentication/ListItems';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useState } from 'react'


function App() {
  const [input, setInput] = useState("")
  const [img, setImg] = useState(null)

  const Post = () => {
    setImg(input)
    setInput("")
  }
  return (
    <BrowserRouter >

      <Routes >
        <Route path="/home" element={<TodoItems Post={Post} input={input} setInput={setInput} />} />
        <Route path="List" element={<ListItems img={img} />} />
        <Route path="/" element={<SignIn />} />
        <Route path="SignUp" element={ <SignUp />} />

      </Routes>


      




    </BrowserRouter>
  );
}

export default App;
