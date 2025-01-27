import React from 'react'
import Amazon from '../CasePages/Amazon'
import BusinessCase from './BusinessCase'
// import Amazon from './Amazon'
import Navbar from '../components/Navbar'
import BusinessPlatformMessage from './BusinessPlatformMessage'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
// md:xl:ml-32 
// md:lg:w-[1080px]
function Home() {
  return (
    
    <div className=' p-2 mt-24  text-[20px] border-r-2  h-[2000px] md:pl-8     lg:w-10/12 lg:pl-16    '>
      {/* <h2 className='text-[32px] font-normal my-3 pr-8'>
      If you aspire to become a successful businessman and build a thriving career, this platform is the perfect starting point for you
      </h2> */}
      <h2 className='  p-4  tracking-tight  n text-[30px] max-lg:text-[25px] max-sm: leading-[1.3] '>
       Businessmen and students passionate about entrepreneurship! <br />  and eager to pursue knowledge, elevate yourself, And aspire to be a trailblazing entrepreneur, a top businessman, or a leader who inspires teams and drives your company to success.
      </h2>  

      <h2 className=' p-4 pt-0  tracking-tight text-[30px] max-lg:text-[25px] mlg: leading-[1.3] font-medium'>
      This platform provide  sharp, clear insights, delivering information in a direct, simple, and impactful way
      that resonates with both aspiring students and driven businessmen.

    
      </h2>
      <div className=' pt-4 '>
        <p className=' '>In this realm of expertise, you must possess these essential informations:</p>
        <div className=' mt-3 '>
          <ul className=' ml-10 list-disc flex flex-col gap-2 '>
            <li className=' underline  '>

              <Link to={"#case"} className=''> Global Business Insights and Case Studies </Link>
            </li> 
            <li className=' underline '>

              <Link> Speeches of Successful Businessman </Link>
            </li>
            <li className='underline'>

              <Link> Leadership Quality </Link>
            </li>
            <li className='underline'>

              <Link>Business Managements</Link>
              <HashLink to="/#manag">manag</HashLink> 
              <a href='#manag'>lalllala</a>
            </li>
            
          </ul>
        </div>

      </div>
      <div className=' flex flex-col gap-6'>
        <div className='  pt-4' id='case'>
          <h2 className=' text-[22px] font-medium tracking-tight' >Global Business Insights and Case Studies</h2>
          <p className=''> To become a successful businessman, you have  to learn how to run a business. It is crucial to understand how businesses operate and what types of businesses are growing or  thriving worldwide.</p>
          {/* <p> so its essential for you to study their business cases and insights to drive your business sucessfully </p> */}
          <p className=''>We provide global business cases and insights in sipmle and usefull way </p>
          <Link className='  underline tracking-widest text-blue-900 ' to={"/businesscase"}>BusinessCase</Link>
        </div>
          

        <div className='  pt-4   max-sm:block  ' id='manag'>
          <h2 className=' text-[22px] font-medium tracking-tight '> Speeches of Successful Businessman </h2>
          <p>A businessman needs to study and understand the personality, thought process, mindset, and ideas of successful businessmen worldwide, so that he can improve himself and his business.</p>
          <p>We provide Speeches of Successful Businessman  in sipmle and usefull way 
          </p>
          <Link className=' underline tracking-widest text-blue-900' to={"/speeches"}>Speeches</Link>
          

          </div>
        <div  id='case'>
          <h2 className=' text-[22px] font-medium tracking-tight '> leadership quality </h2>
          <p>"It is essential for a businessman to be a leader. He must possess the qualities and attributes of a leader-who can effectively lead their team, employees, and the people within their business environment. This leadership ability will help them achieve their goals and successfully run their business."</p>
          <Link className=' underline tracking-widest text-blue-900' to={"/leadership"}>Leadership</Link>

          

        </div>
        <div   className=''>
          <h2 className=' text-[22px] font-medium tracking-tight text-blue-90'> Business Managements </h2>
          <p>To become a successful businessman, you need to have knowledge of business and management. You should understand the factors that influence a business, the strategies, administration methods, and how things work in different areas and how they operate."</p>
          <p>We provide leadership quality  in sipmle and usefull way </p>
          <Link className=' underline tracking-widest text-blue-900'  to={"/managment"}>Management</Link>
          
          

        </div>
        
      </div>
     

          
    </div>


  )
}

export default Home



