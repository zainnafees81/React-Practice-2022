import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import List from './components/List';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from '../src/components/SignUp';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={ <SignUp />} />
        <Route path="/" element={<Protected  Component = {Home} />} exact />
        <Route path="List" element={<Protected Component = {List} />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
