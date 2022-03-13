import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Jhonper86</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="http://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="http://twiter.com" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jhonatan Grueso Perea</small>
      </div>

    </footer>
  )
}

export default Footer