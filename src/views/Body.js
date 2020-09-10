import React, { useState } from 'react';
import './Body.css';
import List from './list.js'

const Body = () => {

   const [currentVal, newVal] = useState('Current Value!');
   const [cList, nList] = useState(List);

   let new_val = () => {
      newVal('New Value!');
   }

   return (
      <div className='body'>
         <div className='body-title'>BODY</div>
         <div className='body-flex-wrap'>
            <div className='body-current-value'>{currentVal}</div>
            <button onClick={new_val}>Click</button>
         </div>

         <hr />

         <div className='body-board'>
            <div className='player-wrap'>
               <div>Player</div>
               <div>{cList.map(item => <div key={item.name}>{item.name}</div>)}</div>
            </div>
            <div className='score-wrap'>
               <div>Score</div>
               <div>{cList.map(item => <div key={item.name+item.score}>{item.score}</div>)}</div>
            </div>
         </div>
      </div>
   )
}

export default Body;