import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg'
import Gps from './Components/Gps';
import Heading from './Components/Heading';
const App=()=> {
  return (
    <>
    <div className='container'>
    <Heading/>
    <Gps/>
    </div>
    <ParticlesBg type="circle" bg={true} />
    </>
  );
}
export default App;
