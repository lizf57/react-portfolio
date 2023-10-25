import Navigation from "./components/Navigation"
import Header from "./components/Header"
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

const App = () => {
   return (
   <>
      <div className="container">
         <Header />
         <Navigation />
      </div>
         <Footer />

   </>

   )
}

export default App