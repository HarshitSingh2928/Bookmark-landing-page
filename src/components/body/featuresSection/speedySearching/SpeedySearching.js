import React from 'react'
import './SpeedySearcching.css'
const SpeedySearching = ({para,pic,heading}) => {
  return (
   <section className='speedy'>
    <img src={pic} />
    <div>
        <h1>{heading}</h1>
        <p>{para}
        </p>
        <button>More Info</button>
    </div>
   </section>
  )
}

export default SpeedySearching