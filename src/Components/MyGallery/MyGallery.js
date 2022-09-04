import React from 'react'
import "./styles.scss"
import {Parallax} from "react-parallax";
import art1 from "../images/art1.jpg";
import art2 from "../images/art2.jpg";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.png";
import art5 from "../images/art5.png";
import art6 from "../images/art6.jpg";
import art7 from "../images/art7.jpg";
import art8 from "../images/art8.jpg";
import art9 from "../images/art9.jpg";
import artbg from "../images/artbg.png";




function MyGallery() {

  return (
    
    <Parallax className='pre' bgImage={artbg} strength={400}>

        <div className='MyGallery'>
          <span>
              <h2>illustrations</h2>
              <hr/>
          </span>
          <p>
              Some of my Works include:
          </p>

          <div className='art_works'>
              <div className='pics'>
                  <img src={art1} alt="" />
              </div>

              <div className='pics'>
                  <img src={art5} alt="" />
              </div>

              <div className='pics'>
                  <img src={art4} alt="" />
              </div>

              <div className='pics'>
                  <img src={art6} alt="" />
              </div>

              <div className='pics'>
                  <img src={art7} alt="" />
              </div>

              <div className='pics'>
                  <img src={art9} alt="" />
              </div>

              <div className='pics'>
                  <img src={art8} alt="" />
              </div>

              <div className='pics'>
                  <img src={art2} alt="" />
              </div>

              <div className='pics'>
                  <img src={art3} alt="" />
              </div>


          </div>

        </div>
        
    </Parallax>

  )
}

export default MyGallery