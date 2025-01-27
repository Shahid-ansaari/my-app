import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BusinessCase from './pages/BusinessCase'
import Amazon from './CasePages/Amazon'
import CaseAside from './components/CaseAside'
import { useLocation } from 'react-router-dom'
import LeaderSpeeches from './pages/LeaderSpeeches'
import WarrenBuffet from './SpeeechPages/WarrenBuffet'
import CasePageHome from './CasePages/CasePageHome'






function App() {
  
  return (
    <div className='relative   '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/businesscase' element={<BusinessCase/>}/>
        <Route path='/speeches' element={<LeaderSpeeches/>}/>
        <Route path='/businesscase/amazon' element={<Amazon/>}/>
        <Route path='/businesscase/flipkart' element={<CasePageHome/>}/>
        <Route path='/speeches/warrenbuffet' element={<WarrenBuffet/>}/>
      </Routes>
    </div>
  )
}

export default App
