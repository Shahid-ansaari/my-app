import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from './35082661.jpg';
import { VscColorMode } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";



function Navbar() {
  return (


    <div className=' sticky top-0 '>
      <header className=' flex flex-row w-full h-fit bg-green-800   text-white justify-center items-center '>


          <Link to={"/"} className='flex ' target='_top'>
            {/* <img src={img} alt="logo" width={30} height={5} loading='lazyloading' className=' p-1' /> */}
            <p className=' text-2xl  tracking-wide cursor-pointer p-2 text-orange-200'>AspirePreneure</p>
          </Link>

      </header>

      <nav className=' flex flex-row items-start bg-black bg-opacity-95 text-white  p-1 overflow-x-auto '>
        <ul className=' flex gap-6 tracking-wide  text-xl text-orange-200 font-normal   '>        
          <li>
            <NavLink to={"/businesscase"} target='_top' >BusinessCase</NavLink>
          </li>
          <li>
            <NavLink to={"/speeches"} target='_top'>Speeches</NavLink>
          </li>
          <li>
            <NavLink to={"/leadership"} target='_top'>Leadership</NavLink>
          </li>
          <li>
            <NavLink to={"/managment"} target='_top'>Management</NavLink>
          </li>
          <li>
            <NavLink to={"/guidance"} target='_top'>Guidance</NavLink>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
