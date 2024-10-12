import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Tour from './component/Tour'
import LoginRegister from './component/LoginRegister'
import './App.css'



export default function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/About' element={<About></About>}></Route>  
        <Route path='/Tour' element={<Tour></Tour>}></Route>
        <Route path='/LoginRegister' element={<LoginRegister></LoginRegister>}></Route>
            </Routes>
      
    </div>
  )
}


