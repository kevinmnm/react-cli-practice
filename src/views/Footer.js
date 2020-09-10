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
   
   random_number(){ //Need to bind(this).
      this.setState( prev => {
         return {
            random: {
               text: prev.random.text,
               boolean: prev.random.boolean,
               number: Math.floor(Math.random()*10+1)
            }
         }
      });
   }

   random_text = () => { //No need to bind(this).
      this.setState( prevState => {
         return {
            random: {
               number: prevState.random.number,
               boolean: prevState.random.boolean,
               text: Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,5)
            }
         }
      });
   }

   random_boolean = () => { //No need to bind(this).
      this.setState( prev => {
         return {
            random: {
               number: prev.random.number,
               text: prev.random.text,
               boolean: (Math.random() > 0.5) ? 'True' : 'False'
            }
         }
      });
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
                  <button onClick={ this.random_number.bind(this) }>Click</button>
               </div>
            
               <div className='random-text'>
                  <div>Random Text</div>
                  <div className='text random-value'>
                     { this.state.random.text }
                  </div>
                  <button onClick={ this.random_text }>Click</button>
               </div>

               <div className='random-boolean'>
                  <div>Random Boolean</div>
                  <div className='boolean random-value'>
                     { this.state.random.boolean }
                  </div>
                  <button onClick={ this.random_boolean }>Click</button>
               </div>
            
            </div>

         </div>
      )
   };
}




export default Footer;