import React, { useState } from 'react'
import Hello from './Hello';

function RightCareer() {
  const [formData,setFormData] = useState("")
  function changehandler(event){
    console.log(event.target.value);
     let val  =event.target.value
    setFormData(val)
    
  }
  
  function submitHandler(){
  
    if(formData === "asa"){
      return ( <Hello></Hello>)
    }
    console.log(formData);}
 
  
  return (
    <div>
        <h2 className=' text-[50px] font-extrabold'>
            isme pasion ,mistakes, resourcess,problems,development after12th,  ko   include karna hai
        </h2>
        <form >
          
          <label htmlFor='firstName'>First Name</label>
          <br/>
          <input
          placeholder='first name'
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={changehandler}
          className=' outline ' />
        </form>
        <button onClick={submitHandler}>submit</button>
    </div>
  )
}

export default RightCareer