import React from 'react'
import img from "../../Img/carrousel-3.jpg"
import "./style.css"

const Header = () => {
  return (
    <div>
        <img src={img} alt="Carrusel" className='carrusel' />
    </div>
  )
}

export default Header