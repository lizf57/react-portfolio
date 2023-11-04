import './resume.css'

const Resume = () => {
    return (
        <>
        <div className='resume-container rounded-3 p-3 m-5'>

            <a className='button' href="/files/resume-coding.pdf" target='_blank' >
                <button className='rounded-3 text-center m-3 p-2'>
                    <div className='icon'>
                        <i className="fa fa-thin fa-1x fa-download p-2 text-light">Download my Resume</i>
                    </div>
                </button>
            </a>

            <h3 className='resume-title text-left m-3 fs-2'>My Coding Skills:
            </h3>  
             
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
              
           </div>
        </>
    )
}

export default Resume