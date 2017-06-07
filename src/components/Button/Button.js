import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export const Button = ({ value, size, onClick }) => {
  const defineClass = () => {
    let _class = 'btn btn-light'
    _class += ' ' + size
    return _class
  }

  return (
    <button className={defineClass()}
      onClick={onClick}>{value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
