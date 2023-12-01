import React from 'react'
import './Header.css'
import { imageBag } from '../../Const'

const Header = () => {
  return (
    <div className='header'>
        <div className='left'>
          <img src={imageBag.logo} className='pizza-logo' alt='logo' />
          <a href='#' className='Head-text'>Cool!
          <li className='colored-text'>Pizza</li>
          </a>
        </div>
        <div className='center'>
          <li><a>Buy Pizza</a></li>
          <li>Contact</li>
          <li>Menu</li>
        </div>
        <div className='right'>
          <button className='sms-btn'>Send message</button>
        </div>
    </div>
  )
}

export default Header