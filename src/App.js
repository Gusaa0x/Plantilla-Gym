import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Clases from './components/Clases';
import InfoClases from './components/InfoClases';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='z-50'>
      <Header/> 
      <Banner/>
      <Clases/>
      <InfoClases/>
      <Footer/>
    </div>
  )
}

export default App
