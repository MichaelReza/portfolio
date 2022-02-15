import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Resume, Projects, Home } from './routes/index.js'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
  </BrowserRouter>, 
document.getElementById("root")); 
