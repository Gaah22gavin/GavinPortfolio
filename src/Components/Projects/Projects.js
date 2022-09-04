import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {My_Project_data} from "./Data"

import "./projects_styles.scss"
import img from "../images/project-img.png";

function Projects() {

const settings = {

      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            speed: 800,
          }
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows: false,
            autoplay: true,
          }
        },

        {
          breakpoint: 480,
          settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
          }
        }
      ]
};
  
  

  return (
    <section id="project" className='Projects'>
        <span>
          <h2>Projects </h2>
          <hr/>
        </span>
        <p>
           Some of my projects include:
        </p>
        
        <div className="all_projects">
            <Slider {...settings}>
                {
                  My_Project_data.map((item)=>{
                  
                    return <div className='box'>
                      <img src={item.image} alt="food" />
                      <p className='box_text'>
                        {
                          item.text
                        }
                      </p>
                      <button>
                        <a href={item.link} target="_blank">
                            {item.btn}
                        </a>
                      </button>
                  </div>
                  })
                }

            </Slider>
        </div>
      
    </section>
  )
}

export default Projects