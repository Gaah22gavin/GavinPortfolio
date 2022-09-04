import React from 'react'
import "./Contact_styles.scss";

function Contact() {
  return (
    <section className='Contact' id='contact'>
        <span>
          <h2>GET IN TOUCH</h2>
          <hr/>
        </span>
        <p>
           4561 Kuwadzana 6 Harare, Zimbabwe Tel :+263784445096
        </p>
        <p>
           Email: <a href="#">gavinmakiyi@gmail.com</a>
        </p>

        <div className="form">
            <form action="">
                <input type="text" placeholder='Your Name'/>
                <input type="Email" placeholder='Your Email'/>
                <textarea name="" id="" cols="30" rows="8" placeholder='Your Massage'>
                </textarea>
                <button>
                    Sand Massage
                </button>
            </form>
        </div>

    </section>
  )
}

export default Contact