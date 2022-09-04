import React from 'react'
import { IconContext } from 'react-icons'
import "./skills-styles.scss"
import {IoLogoJavascript} from "react-icons/io"
import {IoLogoHtml5} from "react-icons/io"
import {IoLogoCss3} from "react-icons/io"
import {BsBootstrap} from "react-icons/bs"
import {IoLogoReact} from "react-icons/io5"
import {IoLogoWordpress} from "react-icons/io5"
import {motion} from "framer-motion";
import {useEffect} from 'react'
import {useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer";



function Skills() {


    
    const {ref, inView} = useInView({
      threshold: 0.25
    });
    const animation = useAnimation();
    useEffect(()=>{      
      if(inView){
        animation.start({
          x: 0,
          transition: {
            type: 'spring', duration: 1, bounce: 0.3,
          }
        })
      }

      if(!inView){
          animation.start({
            x: '100vw'
          })
        }

    },[inView])

  return (
    <section id="skills" className='Skills' ref = {ref}>
        <span>
          <h2>Skills</h2>
          <hr/>
        </span>
        <p>
           I have a vast experience in the following web technologies:
        </p>

        <motion.div className="skills_box" 
        animate={animation}>

                

            <div className="skill">
                <span>
                    
                    <IconContext.Provider value={{className: "icon"}}><IoLogoJavascript /></IconContext.Provider>
                </span>

                <h3>javascript/
                    Jquery</h3>
            </div>

            <div className="skill">
                <span>
                <IconContext.Provider value={{className: "icon"}}><IoLogoHtml5 /></IconContext.Provider>
                </span>
                <h3>HTML:5</h3>
            </div>

             <div className="skill">
                <span>
                    <IconContext.Provider value={{className: "icon"}}><IoLogoCss3 /></IconContext.Provider>
                </span>
                <h3>CSS:3/
                    Sass
                </h3>
            </div>

            <div className="skill">
                <span>
                    <IconContext.Provider value={{className: "icon"}}><IoLogoWordpress /> </IconContext.Provider>
                </span>
                <h3>WordPress/
                    Divi-theme</h3>
            </div>

            <div className="skill">
                <span>
                    <IconContext.Provider value={{className: "icon"}}><BsBootstrap /></IconContext.Provider> 
                </span>
                <h3>Bootstrap:5</h3>
            </div>

             <div className="skill">
                <span>
                    <IconContext.Provider value={{className: "icon"}}><IoLogoReact /> </IconContext.Provider>
                </span>
                <h3>React.js</h3>
            </div>

        </motion.div>
        
    </section>
  )
}

export default Skills