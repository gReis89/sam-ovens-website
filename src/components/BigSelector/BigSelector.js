import React from 'react'
import PropTypes from 'prop-types'
import _map from 'lodash/map'
import arrowDown from 'assets/imgs/icon-arrow-down.svg'
import './BigSelector.scss'

export const BigSelector = ({ value, data, onChange, className }) => {
  const handleClass = () => {
    let c = 'big-selector'
    c = className ? c + ' ' + className : c
    return c
  }
  return (
    <div className={handleClass()}>
      <div className='big-selector-button'>
        <div className='big-selector-value'>{value}</div>
        <div className='big-selector-arrow'><img src={arrowDown} /></div>
      </div>
      <ul className='big-selector-popover hide'>
        {
          _map(data, (item, i) => <li key={i} value={item.value}>{item.description}</li>)
        }
      </ul>
    </div>
  )
}

BigSelector.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  data: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string
}

export default BigSelector
