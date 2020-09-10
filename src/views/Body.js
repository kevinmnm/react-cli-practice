import React, { useState } from 'react';
import './Body.css';

const Body = () => {

   const [currentVal, newVal] = useState('Current Value!');

   let new_val = () => {
      newVal('New Value!');
   }

   return (
      <div className='body'>
         <div className='body-title'>BODY</div>
         <div className='body-flex-wrap'>
            <div className='body-current-value'>{ currentVal }</div>
            <button onClick={ new_val }>Click</button>
         </div>
      </div>
   )
}

export default Body;