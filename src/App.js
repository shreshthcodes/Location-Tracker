import React from 'react';
import './App.css';
import Gps from './Components/Gps';
import Heading from './Components/Heading';
const App=()=> {
  return (
    <div className='container'>
    <Heading/>
    <Gps/>
    </div>
  );
}
export default App;
