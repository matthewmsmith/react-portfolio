import React from 'react'
import CV from './CTA'
import myself from '../../assets/myself.jpg'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header >
      <div className='container header__container'>
      <h5>Yo, I am</h5>
      <h1>Matthew Smith</h1>
      <h5 className="text__light">I am a React Developer</h5>
      <CV />
      <div className="me">
        <img src={myself} alt="myself" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      <HeaderSocial/>
      </div>
    </header>
  )
}

export default Header