import React, { useState } from "react"

import Home from "./components/Home"
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer'

import './app.css'

const App = () => {

   const [page, setPage] = useState('home')

   const renderPage = () => {
      if (page === 'home') {
         return <Home />
      } else if (page === 'about'){
         return <About />
      } else if (page === 'project'){
         return <Project />
      } else if (page === 'contact') {
         return <Contact />
      } else if (page === 'resume'){
         return <Resume />
      }
   }


   return (
   <>
      <div className="container">
      {renderPage()}

      </div>

      <div>
         <About />
         <Footer />
      </div>
   </>

   )
}

export default App