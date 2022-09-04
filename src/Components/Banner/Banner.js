import React from 'react';
import Typewriter from "typewriter-effect"
import "./banner.scss"


function Banner() {

  return (

       <section className='banner'>

        <div className='overlay'>
            
        <div className='text-One'>
            <h1>Hello, There!</h1>
            <h1> I'M <span>Gavin Makiyi</span></h1>    
            <p>
        
              <Typewriter
              onInit={(typerwriter)=>{
                typerwriter.typeString("I am a font-end Developer and here is my portfolio website. Here you'll learn about my journey as a web Developer.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("I am a font-end Developer and here is my portfolio website. Here you'll learn about my journey as a web Developer.")
                .start();
              }}
            />
              
              </p>

            <button><a href="#project">Projects</a></button>
            <button><a href="#contact">Contact</a></button>

        </div>

        </div>

    </section>

  )

}

export default Banner;
