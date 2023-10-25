import './project.css'

const Project = () => {
    return (
     <>
      <div className='grid'>
         <div className='container m-1'>
            <div className='row'>

         {/* project 1 */}
            <div className='col-lg-4 m-1 gap-1'>
               <div className='card'>
                  <h1 className='text-center rounded-2 fs-2 p-3 headline'>Career Craft</h1>
                  <img className='card-img-top' src="public/images/career-craft.png" alt="Card image"/>
                  <div className='card-body'>
                     <h4 className='card-title text-center fs-4'> Node | Express | Sequelize</h4>
                     <p className='card-text text-center fs-5'>Career Craft is a web application that generates resumes to a PDF for users to download</p>
                     <div className='btns d-flex justify-content-center gap-3'>
                        <a href='https://career-craft3-1f46cd29a2af.herokuapp.com/login' className='btn' target='_blank'>Deploy App</a>
                        <a href='https://github.com/tjansson-ui/JobReadyResumeBuilder' className='btn' target='_blank'>Github Repo</a>
                     </div>
                  </div>
               </div>
            </div>
         {/* project 2 */}
         <div className='col-lg-4 m-1 gap-1'>
               <div className='card'>
                  <h1 className='text-center rounded-2 fs-2 p-3 headline'>Work Day Schedule</h1>
                  <img className='card-img-top' src="public/images/office-organizer-img.jpeg" alt="Card image"/>
                  <div className='card-body'>
                     <h4 className='card-title text-center fs-4'> jQuery | HTML | CSS</h4>
                     <p className='card-text text-center fs-5'>A straightforward calender application that facilitates users in preserving events for every hour wihtin a conventional working day from 9am to 5pm.</p>
                     <div className='btns d-flex justify-content-center gap-3'>
                        <a href='https://lizf57.github.io/work-day-schedule/' className='btn' target='_blank'>Deploy App</a>
                        <a href='https://github.com/lizf57/work-day-schedule' className='btn' target='_blank'>Github Repo</a>
                     </div>
                  </div>
               </div>
            </div>
         {/* project 3 */}
         <div className='col-lg-4 m-1 gap-1'>
               <div className='card'>
                  <h1 className='text-center rounded-2 fs-2 p-3 headline'>Weather App</h1>
                  <img className='card-img-top' src="public/images/weather-app-img.jpeg" alt="Card image"/>
                  <div className='card-body'>
                     <h4 className='card-title text-center fs-4'> Third Party API | Javascript </h4>
                     <p className='card-text text-center fs-5'>The Weather App enables users to access weather information for any city, including a comprehensive 5-day forecast.</p>
                     <div className='btns d-flex justify-content-center gap-3'>
                        <a href='https://lizf57.github.io/weather-app/' className='btn' target='_blank'>Deploy App</a>
                        <a href='https://github.com/lizf57/weather-app' className='btn' target='_blank'>Github Repo</a>
                     </div>
                  </div>
               </div>
            </div>
         {/* project 4 */}
         {/* project 5 */}
         {/* project 6 */}







            </div>
         </div>
      </div>
        

     </>
    )
 }
 
 export default Project