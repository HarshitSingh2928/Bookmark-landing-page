import React from 'react'
import image from '../../../images/illustration-hero.svg'
import './FirstSection.scss'
const FirstSection = () => {
  return (
    <div className='firstsection'>
        <section>
          <div>
              <h1>A Simple Bookmark <br/>Manager</h1>
              <p>A clean and simple interface to organize your favourite 
                <br/>
                websites. Open a new browser tab and see your sites load
                <br/>
                instantly. Try it for free.
              </p>
              <div>
                <button className='chrome'>Get it on Chrome</button>
                <button className='firefox'>Get it on Firefox</button>
              </div>
          </div>
          <img src={image}/>
        </section>
    </div>
  )
}

export default FirstSection