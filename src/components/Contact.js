import React from 'react'

function Contact() {
  return (
   <div>
     <h1 title = "heading" className='text-3xl font-bold text-blue-950 text-center' >ContactUs
    </h1>
    <form className='flex justify-center'>
      <input type="text" className='border  border-black p-2 m-2 rounded-sm'  placeholder='Fullname'/>
      <input type="text" className='border border-black p-2 m-2 rounded-sm' placeholder='type your email'/>
      <br/>
      <button className='bg-blue-950 p-1 m-1 font-bold text-white rounded-md'>submit</button>
    </form>
   </div>
  )
}

export default Contact