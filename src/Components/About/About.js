import React from 'react'
import {useEffect} from 'react'
import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion"
import '../About/about-style.scss'
import profiles from "../images/profiles.jpg";
import {motion} from "framer-motion";


function About() {

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


      <section id="about"className='about' ref = {ref}>

        <span>
          <h2> More about my style</h2>
          <hr />
        </span>
      

        <div className="img">
            <img src={profiles} alt="my self" />
        </div>

        <motion.div className="text"
          animate={animation}
        >
          <p>Hi, thanks for visiting my web portfolio. i'm gavin Makiyi. I am a professional front-end web developer with +two years of working experience. I will ensure you your website is fully responsive, good looking, user-friendly and compatible for all devices.</p>
        

          <h3>Services Offered</h3>

          <ul>
            <li>Fully Responsive web site</li>
            <li>PSD, XD, Figma, Ai, to HTML, WordPress, React.js</li>
            <li>Custom Development(HTML CSS JS Bootstrap)</li>
            <li>WordPress/ divi-theme Website</li>
            <li>Cross-browser Compatibility</li>
            <li>Your satisfaction is my guarantee, therefore I'LL work until you are 100% satisfied</li>
          </ul>

          <button >
            <a href="#contact">Contact Me</a>
          </button>

        </motion.div>


    </section>

  )

}

export default About