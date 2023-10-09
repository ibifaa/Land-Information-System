/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Services } from './pages/Services';
import { Report } from './pages/Report';
import { Record } from './pages/Record';
import { Footer } from './component/Footer'


function App() {

  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/report' element={<Report />} />
          <Route path='/record' element={<Record />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
