import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png';

function Footer() {
  return (
   <footer>
    <div className='footer__container'>
        <div className='row'>
            <a href="">
                <img src={logo} alt="" className='logo'/>
            </a>
            <div className="footer__list">
                <a href="/" className='footer__link'>Home</a>
                <a href="/" className='footer__link'>About</a>
                <a href="/" className='footer__link'>Movies</a>
            </div>
            <div className='footer__copyright'>copyright &copy; 2023 flicker</div>
        </div>
    </div>
   </footer>
  )
}

export default Footer