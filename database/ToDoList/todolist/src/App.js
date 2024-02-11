import './App.css'
import Login from './Items/Login'
import SignIn from './Items/SignIn'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/SignIn" element={<SignIn />}></Route>
    </Routes>  
    </BrowserRouter>
  )
}

export default App


