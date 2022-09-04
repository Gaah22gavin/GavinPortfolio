import React from 'react';
import './App.scss';
import {Navbar, Banner, About, Services, Skills, Projects, Clients, Contact, Footer, MyGallery} from './Components';
import './assets/Fonts/fonts.css'
import "./Components/Main_styles.scss"


function App() {
  return (
      <>
          <Navbar/>
          <Banner/>
          <About/>
          <Services/>
          <Skills/> 
          <Projects/>
          <MyGallery/>
          <Clients/>
          <Contact/>
          <Footer/>
      </>
  )
}

export default App;
