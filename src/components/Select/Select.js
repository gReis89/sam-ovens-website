import React from 'react'
import PropTypes from 'prop-types'
import _map from 'lodash/map'

export const Select = ({ value, data, onChange }) => {
  const defineClass = () => {
    let _class = 'form-control'
    return _class
  }

  return (
    <select type='text' className={defineClass()} value={value} onChange={onChange}>
      {
        _map(data, (item, i) => <option key={i} value={item.value}>{item.description}</option>)
      }
    </select>
  )
}

Select.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  data: PropTypes.array,
  onChange: PropTypes.func
}

export default Select
