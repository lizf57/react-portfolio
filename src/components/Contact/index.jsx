import './contact.css'

const Contact = () => {
    return (
     <>
     <div className='container'>
         <h2 className='title fs-3'>Contact Info:</h2>
            <ul className='bullets text-light'>
               <li>
                  <a href="mailto:lizfriedman5@gmail.com" target='_blank'> Email </a>
               </li>

               <li>
                  <a href="https://github.com/lizf57" target='_blank'> Github </a>
               </li>

               <li>
                  <a href="https://www.linkedin.com/in/liz-friedman-711113247/" target="_blank">LinkedIn</a>
               </li>

            </ul>
     </div>
        
     </>
    )
 }
 
 export default Contact