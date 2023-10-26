import './contact.css'

const Contact = () => {
    return (
     <>
     <div className='container p-3 m-4'>
         <h2 className='title fs-1'>Contact Info:</h2>
            <ul className='bullets text-light fs-4'>
               <li className='contact-li'>
                  <a href="mailto:lizfriedman5@gmail.com" target='_blank'> Email </a>
               </li>

               <li className='contact-li'>
                  <a href="https://github.com/lizf57" target='_blank'> Github </a>
               </li>

               <li className='contact-li'>
                  <a href="https://www.linkedin.com/in/liz-friedman-711113247/" target="_blank">LinkedIn</a>
               </li>
            </ul>
     </div>
        
     </>
    )
 }
 
 export default Contact