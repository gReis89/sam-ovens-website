import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import './CoreLayout.scss'
import 'assets/styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='container'>
      <Sidebar />
      <div className='main'>
        {children}
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
