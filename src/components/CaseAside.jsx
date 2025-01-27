import React from 'react'
import { NavLink } from 'react-router-dom'
// position: relative;
// padding: 2px 15px 1px 40px;
// width: 100%;
// font-size: 15px;
// line-height: 1.5;

function CaseAside() {
  return (
    <div className=' fixed'>
      <aside className='   border w-[250px] h-screen bg-gray-200 overflow-y-scroll pt-[87px]   pb-0  '>
        <nav>
          <ul>

            {/* <li className=' relative   text-[15px]  '>
              <NavLink to={"/businesscase"} target='_top' title='Amazon-case' className=" py-[2px] leading-normal pl-12 ">
                aboute 
              </NavLink>
            </li> */}
            <li className=' relative   text-[15px]  '>
              <NavLink to={"/businesscase/amazon"} target='_top' title='Amazon-case' className=" py-[2px] leading-normal pl-12 ">
                AMAZON 
              </NavLink>
            </li>            
          </ul>
          <ul>

            <li>
            <NavLink to={"/businesscase/flipkart"} target='_top' title='Amazon-case' className=" py-[2px] leading-normal pl-12 ">
                flipkart 
              </NavLink>
            </li>
          </ul>

        </nav>

      </aside>
    </div>
  )
}

export default CaseAside