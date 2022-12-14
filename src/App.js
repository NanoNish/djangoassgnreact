import React from 'react';
import './App.css';
import { Route,Routes} from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

function App() {
  return (
    <div className = "App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;