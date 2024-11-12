import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Callabout from './component/Callabout';
import Navbar from './component/Navbar';
import Tour from './component/Tour';
import TourDetails from './component/TourDetails';
import Login from './component/Login';
import Register from './component/Register';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Callabout' element={<Callabout />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/tours/:id' element={<TourDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
