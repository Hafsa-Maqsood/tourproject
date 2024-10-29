import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import LoginRegister from './component/LoginRegister'
import './App.css'
import Tour from './component/Tour'; 
import TourDetails from './component/TourDetails';

export default function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
      
      <Route path="/Tour" element={<Tour />} /> {/* Your Tour component route */}
      <Route path="/tours/:id" element={<TourDetails />} /> 
        <Route path='/' element={<Home></Home>}/>
        <Route path='/About' element={<About></About>}></Route>  
        
        <Route path='/LoginRegister' element={<LoginRegister></LoginRegister>}></Route>
            </Routes>
      
    </div>
  )
}


