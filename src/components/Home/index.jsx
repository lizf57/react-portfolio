import Header from "../Header"

import './home.css'

const Home = () => {
    return (
     <>
      
      <div className="container">
         <Header />
      </div>

      <div>
         <div className="d-flex justify-content-center hero">
                  <img src="/public/images/profile.jpeg" className=" img-thumbnail rounded" alt="profile-pic"/>
         </div>
      </div>
     </>
    )
 }
 
 export default Home