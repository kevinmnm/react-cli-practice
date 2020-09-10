import React from 'react';
import './App.css';
import Header from './views/Header.js'
import Body from './views/Body.js'
import Footer from './views/Footer.js'

function App() {
   return (
      <div className='app'>
         <Header />
         <Body />
         <Footer />
      </div>
   );
}

export default App;
