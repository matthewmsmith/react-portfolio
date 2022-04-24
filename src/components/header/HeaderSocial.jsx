import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/matthewmsmith1992/' target='_blank'>
        <BsLinkedin/>
      </a>
      <a href="https:instagram.com/motomattsmith" target='_blank'>
        <BsInstagram />
      </a>
      
    </div>
  )
}

export default HeaderSocial