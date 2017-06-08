import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export const Button = ({ value, size, onClick, type }) => {
  const defineClass = () => {
    let _class = 'btn'
    _class += ' btn-' + type
    _class += ' ' + size
    return _class
  }

  return (
    <button className={defineClass()}
      onClick={onClick}>{value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
