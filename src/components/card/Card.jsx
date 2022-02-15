import React from 'react'
import './card.css'


const Card = (props) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={props.image} alt="img"/>
      </div>
      <h2 className="gradient__text-subheader">{props.title ? props.title : "..."}</h2>
      <p>{props.description ? props.description : "..."}</p>
    </div>
  )
}

export default Card
