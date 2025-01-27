import React from 'react'
import {Link , NavLink } from 'react-router-dom'
import CaseAside from '../components/CaseAside'
import Amazon from '../CasePages/Amazon'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'

function BusinessCase() {
  return (
    <div className=' flex ' >
      {/* <Navbar/> */}
      <div className='' >

        <aside>
            <CaseAside/>
        </aside>
      </div>
      <div className=' mt-24 ml-64 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, impedit dignissimos, recusandae asperiores assumenda 
      </div>






    </div>
  )
}

export default BusinessCase