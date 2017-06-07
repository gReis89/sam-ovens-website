import React from 'react'
import './Nav.scss'
import iconUser from 'assets/imgs/icon-user.svg'
import iconCommunity from 'assets/imgs/icon-community.svg'
import iconHelp from 'assets/imgs/icon-help.svg'
import iconSearch from 'assets/imgs/icon-search.svg'

export const Nav = () => (
  <nav className='pull-right'>
    <a><img src={iconUser} /> Hi David! <span className='caret' /></a>
    <a><img src={iconCommunity} /> Community <span className='caret' /></a>
    <a><img src={iconHelp} /> Help <span className='caret' /></a>
    <a><img src={iconSearch} /></a>
  </nav>
)

export default Nav
