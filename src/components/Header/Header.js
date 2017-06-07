import React from 'react'
import Nav from 'components/Nav'
import './Header.scss'
import logo from 'assets/imgs/logo.svg'
import iconMenu from 'assets/imgs/icon-menu.svg'

export const Header = () => (
  <header>
    <a className='menu-trigger'><img className='pull-left' src={iconMenu} /></a>
    <img className='logo pull-left' src={logo} />
    <Nav />
  </header>
)

export default Header
