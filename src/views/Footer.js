import React from 'react';
import './Footer.css';

class Footer extends React.Component {
   state = {
      title: 'FOOTER',
      random: {
         number: null,
         text: null,
         boolean: null
      }
   }
   
   random_number = () => {

   }


   render() {
      return (
         <div className='footer'>
            <div className='footer-title'><u>{this.state.title}</u></div>

            <div className='flex-wrap'>

               <div className='random-number'>
                  <div>Random Number</div>
                  <div className='number random-value'>
                     { this.state.random.number }
                  </div>
                  <button>Click</button>
               </div>
            
               <div className='random-text'>
                  <div>Random Text</div>
                  <div className='text random-value'>
                     { this.state.random.text }
                  </div>
                  <button>Click</button>
               </div>

               <div className='random-boolean'>
                  <div>Random Boolean</div>
                  <div className='boolean random-value'>
                     { this.state.random.boolean }
                  </div>
                  <button>Click</button>
               </div>
            
            </div>

         </div>
      )
   };
}




export default Footer;