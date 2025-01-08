import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import BuisnessCase from './components/BuisnessCase'
import RightCareer from './components/RightCareer'
import Hello from './components/Hello'
import { Helmet } from 'react-helmet'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/bsuinesscase' element={<BuisnessCase/>}/>
        <Route path='/career' element={<RightCareer/>}/>
        <Route path='/s' element={<Hello/>}/>
      </Routes>

    </div>
  )
}

export default App