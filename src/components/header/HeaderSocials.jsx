import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/jhonatan-grueso-perea-603707148" target="_blanck"><BsLinkedin /></a>
        <a href="https://github.com/jgruesop" target="_blanck"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials