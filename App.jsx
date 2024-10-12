import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Contacto from './Components/Contacto';
import Info from './Components/Info';
import Projects from './Components/Projects';
import Servicios from './Components/Servicios';
import Slider from './Components/Slider';

function App() {
  return (
    <div>
      <NavBar />
      <Carousel/>
      <Info/>
      <Slider/>
      <Projects/>
      <Servicios/>
      <Footer />
    </div>
  );
}

export default App;