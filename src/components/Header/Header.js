import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='text-center'>
    <h1>StudySoup <span>web application</span></h1>
    <h4>Guilherme Rodrigues</h4>
    <div className='menu-centered'>
      <ul className='menu text-center'>
        <li><IndexLink to='/' activeClassName='active'>App</IndexLink></li>
        <li><Link to='/style-guide' activeClassName='active'>Style Guide</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
