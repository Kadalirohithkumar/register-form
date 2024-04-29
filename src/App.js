import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import LeftPart from './components/LeftImage';
import Header from './components/Header';

function App() {
  
  return(
    <div className='app-con'>
      <Header/>
      <div className='data'>
        <div className='left-part'>
          <LeftPart/>
        </div>
        <div className='form'>
          <Form/>
        </div>
      </div>
    </div>
  )
      
}

export default App;
