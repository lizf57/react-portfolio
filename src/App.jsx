import { useState } from "react"

import Home from "./components/Home"
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './app.css'

const App = () => {

   const [page, setPage] = useState('home')

   const renderPage = () => {
      switch(page){
         case 'home':
            return <Home />
         case 'about':
            return <About />
         case 'project':
            return <Project />
         case 'contact':
               return <Contact />
         default: 
            return <p>404 - Not Found </p>
      }
   }


   return (
   <>
      <div className="container">
         <div>

            <nav className="d-flex justify-content-center p-3 gap-3">

               <a href="#" onClick={() => setPage('home')} className='rounded-3'>
               <button className="rounded-3">Home</button> 
               </a>

               <a href="#" onClick={() => setPage('about')} className='rounded-3'>
                  <button className="rounded-3">About Me</button> 
               </a>

               <a href="#"  onClick={() => setPage('project')} className='rounded-3'>
                  <button className="rounded-3">Projects</button> 
               </a>

               <a href="#"  onClick={() => setPage('contact')} className='rounded-3'>
                  <button className="rounded-3">Contact Info</button> 
               </a>

            </nav>
            {renderPage()}

         </div>
      </div>

      

      <div>
         <Footer />
      </div>
   </>

   )
}

export default App