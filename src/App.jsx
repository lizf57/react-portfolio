import { useState } from "react"

import Home from "./components/Home"
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer'

import './app.css'

const App = () => {

   const [page, setPage] = useState('home')


   return (
   <>
      <div className="container">
         <Home />
      </div>

      <div className="container">

         {page}

         <About />
         <Project />
         <Contact />
         <Resume />
      </div>

      <div>
         <Footer />
      </div>
   </>

   )
}

export default App