import React from 'react';
import './Clients_styles.scss';
import img from "../images/screen.png";
import pro1 from "../images/pro1.jpg";
import pro2 from "../images/pro2.jpg";
import pro3 from "../images/pro3.jpg";

function Clients() {
  return (
    <section className='clients'>
        <span>
          <h2>WHAT PEOPLE SAY ABOUT MY SERVICES</h2>
          <hr/>
        </span>
        <p>
           Our clients love my Services!
        </p>

        <div className="clients_box">

            <div className="box">

                <div className="img">
                   <img src={img} alt="" />
                </div>

                <div className='text'>
                    <p className='italic'>
                        “It was nice to work with m_sameer9900! Delivery was on time. All the necessary functionality was included in the first iteration, and I don't have to spend time on countless iterations. I can recommend "
                    </p>
                    <h3>xmblpb</h3>
                </div>

            </div>

            <div className="box">

                <div className="img">
                   <img src={pro1} alt="" />
                </div>

                <div className='text'>
                    <p className='italic'>
                        “There few points which were not like I was expected but these were solved very fast by Mr. Sameer. Also he replies very fast and answers all the questions."
                    </p>
                    <h3>tofik92</h3>
                </div>

            </div>

            <div className="box">

                <div className="img">
                   <img src={pro2} alt="" />
                </div>

                <div className='text'>
                    <p className='italic'>
                        “Sameer was very detailed and accurate with the design or any changes that were asked of him, very communicative and went above and beyond to help us out, thanks man!"
                    </p>
                    <h3>homarhurtado24</h3>
                </div>

            </div>

            <div className="box">

                <div className="img">
                   <img src={pro3} alt="" />
                </div>

                <div className='text'>
                    <p className='italic'>
                        “Amazing as usual! Great communication and always happy to explain and/ or change his approach."
                    </p>
                    <h3>jdobs024</h3>
                </div>

            </div>

        </div>
        
    </section>
  )
}

export default Clients