import './about.css'

const About = () => {
    return (
     <>
     <div className='about-container rounded-3 p-3 m-5'>
         <h2 className='about-title text-left m-3 fs-1'>About Me</h2>  
            <p className='about-text text-left p-4 m-3 fs-4'>I appreciate your time in reviewing my portfolio. My coding journey commenced in May 2023 through the University of Wisconsin-Madison's online Coding Bootcamp, which spanned approximately six months. Throughout this program, I gained hands-on experience in a wide array of technologies, including: 
            <div className='grid-container'>
                <ul className='gird-column p-4 m-1'>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Git</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>The Document Object Model (DOM)</li>
                    <li>jQuery</li>
                    <li>JSON</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Server-Side APIs</li>
                </ul>
                <ul className='gird-column'>
                    <li>Inquirer</li>
                    <li>Agile Development methodologies</li>
                    <li>ES6</li>
                    <li>Object-Oriented Programming</li>
                    <li>The Model-View-Controller (MVC) paradirm</li>
                    <li>Sequelize</li>
                    <li>Testing procedures </li>
                    <li>React </li>
                    <li> Progressive Web Apps (PWAs)</li>
                    <li>MySQL </li>
                    <li>NoSQL databases </li>
                </ul>
            </div>
            </p>
            <p className='about-text text-left p-4 m-3 fs-4'>From the Bootcamp, I acquired a diverse set of skills for web development. I learned to construct front-end websites, whether from scratch or through the use of established frameworks. This knowledge extends to building full-stack single-page web applications, utilizing RESTful API routes, AJAX methods, and understanding the interaction between front-end and back-end systems. I also delve into structured and unstructured databases, transfomring static websites into dynamic, data-persistent platforms. I developed teamwork and project management abilities, both as a collaborative team member and an independent contributor in complex project envirnoments. A couple team projects completed during the Bootcamp are shown on my project page: Cullinary Climate and Career Craft.
             <br/>
             <br/>
             Beyond the realm of coding, my interests encompass a deep appreciation for the outdoors. I enjoy hiking, traveling, photography, art, and running. In summary, my coding journey has instilled a strong foundation of technical skills and a passion for web development.</p>
        </div>
     </>
    )
 }
 
 export default About