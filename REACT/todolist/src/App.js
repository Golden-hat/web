import './App.css'
import Login from './Items/Login'
import SignIn from './Items/SignIn'
import Tasks from './Items/Tasks.js'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tasks/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
    </Routes>  
    </BrowserRouter>
  )
}

export default App

