import './navigation.css'
import React from 'react'

const Navigation = ({setPage}) => {
    return (
     <div>
      <nav className="d-flex justify-content-center p-3 gap-3">

         <button onClick={() => setPage('about')} className='rounded-3'>
            About Me
         </button>

         <button onClick={() => setPage('project')} className='rounded-3'>
            Projects
         </button>

         <button onClick={() => setPage('contact')} className='rounded-3'>
            Contact
         </button>

         <button onClick={() => setPage('resume')} className='rounded-3'>
            Resume
         </button>

      </nav>

     </div>
    )
 }
 
 export default Navigation

