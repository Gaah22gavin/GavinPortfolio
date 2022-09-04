import React from 'react'
import { useState } from 'react';
import {IconContext } from 'react-icons';
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import logo from "../images/logo.png";
import "./Navbar_styles.scss";




function Navbar() {

  const [Open, setOpen] = useState(true); 

  function humOpen(){
    setOpen(prev => !prev)
  };

  return (

    <header> 

        <div className='img'>
            <img src={logo} alt="logo"/>
        </div>

        <ul className={Open ? "nno" : "links"}>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact me</a></li>
            <li><a href="#project">Project</a></li>
        </ul>

        <div className='icon' onClick={humOpen}>

            {
                Open ? <IconContext.Provider value={{className: "Open"}}><GiHamburgerMenu /></IconContext.Provider> : <IconContext.Provider value={{className: "close"}}><AiOutlineClose /></IconContext.Provider>
            }

        </div>

    </header>

  )
}

export default Navbar;