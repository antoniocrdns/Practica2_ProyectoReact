import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from  './pages/home/Home';
import Header from './components//layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
