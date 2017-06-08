import React from 'react'
import PropTypes from 'prop-types'
import './CollapsedNav.scss'
import iconUser from 'assets/imgs/icon-user.svg'
import iconCommunity from 'assets/imgs/icon-community.svg'
import iconHelp from 'assets/imgs/icon-help.svg'

export const CollapsedNav = ({ show }) => (
  <nav className={show ? 'collapsed-menu visible-xs' : 'collapsed-menu hide'}>
    <a><img src={iconUser} /> Hi David! <span className='caret' /></a>
    <a><img src={iconCommunity} /> Community <span className='caret' /></a>
    <a><img src={iconHelp} /> Help <span className='caret' /></a>
  </nav>
)

CollapsedNav.propTypes = {
  show : PropTypes.bool.isRequired
}

export default CollapsedNav
