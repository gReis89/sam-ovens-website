import React from 'react'
import PropTypes from 'prop-types'

export const InputText = ({ value, size, onChange, width, onKeyUp }) => {
  const defineClass = () => {
    let _class = 'form-control'
    _class += ' ' + size
    return _class
  }

  return (
    <input type='text' style={{ width }} className={defineClass()} value={value}
      onChange={onChange}
      onKeyUp={onKeyUp} />
  )
}

InputText.propTypes = {
  value: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  width: PropTypes.string
}

export default InputText
