import React from 'react'
import './services_styles.scss'
import icon1 from '../images/icon1.png'
import it from '../images/it.png'
import graphic from '../images/graphic.png'

function SERVICES() {

  return (

 
    <section className='Services'>
        <span>
          <h2>Services</h2>
          <hr />
        </span>
        <p>
            I work with both individuals and businesses from all over the globe to create awesome websites and killer graphics.
        </p>

        <div className='cards'>
            <div className='box'>
                <img src={icon1} alt="" />
                <h3>Web Development</h3>
                <p className='box-text'>I have over two years of front end development experience and have successfully finished many projects for wonderful clients with round-the-clock support.
                </p>
            </div>

            <div className='box'>
                <img src={it} alt="" className='IT' />
                <h3>IT Support</h3>
                <p className='box-text'>
                  IT support specialist with more than four years' experience helping clients with a range of hardware and software-related issues.
                </p>
            </div>

            <div className='box'>
                <img src={graphic} alt="" className='graphics' />
                <h3>graphic Design</h3>
                <p className='box-text'>I'm a professional Graphic Designer who has got more than two years of experience by using Adobe illustrator and Adobe Photoshop in the field of Graphic Designing
                </p>
            </div>
            
        </div>

    </section>
  )
}

export default SERVICES