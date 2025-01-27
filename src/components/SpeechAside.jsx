import React from 'react'
import { NavLink } from 'react-router-dom'
// position: relative;
// padding: 2px 15px 1px 40px;
// width: 100%;
// font-size: 15px;
// line-height: 1.5;

function SpeechAside () {
  return (
    <div className='  '>
      <aside className='  border w-[250px] h-screen bg-gray-200 overflow-y-scroll pt-[87px]  top-0 pb-0 '>
        <nav>
          <ul>
            <li className='   text-[15px]  '>
              <NavLink to={"/speeches/warrenbuffet"} target='_top' title='Amazon-case' className=" py-[2px] leading-normal pl-12 ">
                Warren Buffet 
              </NavLink>
            </li>
          </ul>
        </nav>

      </aside>
    </div>
  )
}

export default SpeechAside;