import React from 'react'
import './Card.css'

function Card({ imgSrc, number, text, CustomStyles}) {
  return (
    <div className='card-container' style={CustomStyles}>
      <div className='card-logo-container'>
      <img  className="card-logo"src={imgSrc} alt = "user"></img>
      </div>
      <div className='card-content-container'>
        <h2 className='card-number'>{number}</h2>
        <a className='card-text'>{text}</a>
      </div>

    </div>
  )
}

export default Card;