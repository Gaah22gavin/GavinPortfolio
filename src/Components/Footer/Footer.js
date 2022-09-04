import React from 'react';
import "./Footer_styles.scss";
import {IconContext } from 'react-icons';

import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineGoogle} from "react-icons/ai"


function Footer() {
  return (
    <section className='Footer'>
        <div className="social_links">
          <h2>My social media links:</h2>
          <div className='icon_box'>

            <i>
               <IconContext.Provider value={{className: "icon"}}><AiOutlineFacebook /></IconContext.Provider>
            </i>

            <i>
               <IconContext.Provider value={{className: "icon"}}><AiOutlineWhatsApp /></IconContext.Provider>
            </i>   
            
            <i>
               <IconContext.Provider value={{className: "icon"}}><AiOutlineGithub /></IconContext.Provider>
            </i>           
            
            <i>
               <IconContext.Provider value={{className: "icon"}}><AiOutlineGoogle /></IconContext.Provider>
            </i>

          </div>
        </div>

        <div className="More_Project">
          <h2>More projects I've worked on:</h2>
          <span>
              <i>
               <IconContext.Provider value={{className: "git"}}><AiOutlineGithub /></IconContext.Provider>
            </i>
            <p><a href="https://gaah22gavin.github.io/" target="_blank">gaah22gavin.github.io</a></p>
          </span>
        </div>
    </section>
  )
}

export default Footer