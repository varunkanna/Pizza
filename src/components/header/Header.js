import React from 'react'
import './Header.css'
import { imageBag } from '../../Const'

const Header = () => {
  return (
    <div className='header'>
        <div className='left'>
          <img src={imageBag.logo} className='pizza-logo' alt='logo' />
        </div>
        <div className='center'></div>
        <div className='right'></div>
    </div>
  )
}

export default Header