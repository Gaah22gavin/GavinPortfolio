import React from 'react'
import {Parallax} from "react-parallax";
import "../Pallex/palex.scss";

function Pallex() {
  return (
    <Parallax blur={2} className='pre' bgImage={bgone} strength={400}>
        <div className='paralaxe'>
            <h1>hello there</h1>
        </div>
    </Parallax>
    <h1>hello</h1>
  )
}

export default Pallex