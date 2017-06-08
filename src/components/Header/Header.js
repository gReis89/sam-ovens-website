import React from 'react'
import Nav from 'components/Nav'
import CollapsedNav from 'components/CollapsedNav'
import './Header.scss'
import logo from 'assets/imgs/company-logo.svg'
import iconMenu from 'assets/imgs/icon-menu.svg'

export class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      collapsedMenu: false
    }
  }

  toggleMenu = () => {
    this.setState({ collapsedMenu: !this.state.collapsedMenu })
  }

  render () {
    return (
      <header>
        <a className='menu-trigger visible-xs'
          onClick={this.toggleMenu}><img className='pull-left' src={iconMenu} /></a>
        <img className='logo' src={logo} />
        <Nav />
        <CollapsedNav show={this.state.collapsedMenu} />
      </header>
    )
  }
}

export default Header
