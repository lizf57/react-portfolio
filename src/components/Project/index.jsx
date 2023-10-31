import './project.css'

const projects = [
   {
      title: "Career Craft",
      image: "/images/career-craft.png",
      technologies: "Node | Express | Sequelize",
      description: "Career Craft is a web application that generates resumes to a PDF for users to download",
      deployedUrl: "https://career-craft3-1f46cd29a2af.herokuapp.com/login",
      repoUrl: "https://github.com/tjansson-ui/JobReadyResumeBuilder",
   },
   {
      title: "Work Day Schedule",
      image: "/images/office-organizer-img.jpeg",
      technologies: "jQuery | HTML | CSS",
      description: "A straightforward calender application that facilitates users in preserving events for every hour wihtin a conventional working day from 9am to 5pm.",
      deployedUrl: "https://lizf57.github.io/work-day-schedule/",
      repoUrl: "https://github.com/lizf57/work-day-schedule"
   },
   {
      title: "Weather App",
      image: "/images/weather-app-img.jpeg",
      technologies: "Third Party API | Javascript",
      description: "The Weather App enables users to access weather information for any city, including a comprehensive 5-day forecast.",
      deployedUrl: "https://lizf57.github.io/weather-app/",
      repoUrl: "https://github.com/lizf57/weather-app"
   },
   {
      title: "Culinary Climate",
      image: "/public/images/cc-logo.png",
      technologies: "Two Server Side API's | CSS",
      description: "The Culinary Climate application has been crafted to assist users in making dinner menu decisions by leveraging weather forecast data.",
      deployedUrl: "https://lshankkirchner017.github.io/culinary-climate-uofw/",
      repoUrl: "https://github.com/LShankKirchner017/culinary-climate-uofw"
   },
   {
      title: "Password Generator",
      image: "/public/images/password.jpeg",
      technologies: "HTML | CSS | Javascript",
      description: "The Password Generator app empowers users to create randomized passwords using a combination of lowercase, uppercase, numeric, and special characters.",
      deployedUrl: "https://lizf57.github.io/password_generator/",
      repoUrl: "https://github.com/lizf57/password_generator"
   },
   {
      title: "SVG Logo Maker",
      image: "/public/images/logo-maker.jpeg",
      technologies: "Node | Inquirer | Jest",
      description: "SVG Logo Maker functions through Node JS command line using Inquirer for collecting input from the user to generate a logo to be saved as an SVG file.",
      deployedUrl: "https://github.com/lizf57/svg-logo-maker",
      repoUrl: "https://github.com/lizf57/svg-logo-maker"
   },

]

const Project = () => {
    return (
     <>
      <div className='grid d-flex justify-content-center m-3 p-4'>
         <div className='container m-1'>
            <div className='row justify-content-center d-flex m-1'>

         {projects.map(project => {
            return (
               <div className='col-lg-3 gap-1 m-1'>
                  <div className='card'>
                     <h1 className='text-center rounded-2 fs-2 p-3 headline'>{project.title}</h1>
                     <img className='card-img-top' src={project.image} alt="Card image"/>
                     <div className='card-body'>
                        <h4 className='card-title text-center fs-4'> {project.technologies}</h4>
                        <p className='card-text text-center fs-5'>{project.description}</p>
                        <div className='btns d-flex justify-content-center gap-3'>
                           <a href={project.deployedUrl} className='btn' target='_blank'>Deploy App</a>
                           <a href={project.repoUrl} className='btn' target='_blank'>Github Repo</a>
                        </div>
                     </div>
                  </div>
               </div>

            )
         })}

            </div>
         </div>
      </div>
        

     </>
    )
 }
 
 export default Project