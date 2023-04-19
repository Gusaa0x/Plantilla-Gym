import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Clases from './components/Clases';
import InfoClases from './components/InfoClases';
import Footer from './components/Footer';
import Separador from './components/Separador';
const App = () => {
  return (
    <div className='z-50'>
      <Header/> 
      <Banner/>
      <Clases/>
      <Separador/>
      <InfoClases/>
      <InfoClases/>
      <Footer/>
    </div>
  )
}

export default App
