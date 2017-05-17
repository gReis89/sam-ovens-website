import React from 'react'
import PropTypes from 'prop-types'
import _map from 'lodash/map'
import Button from 'components/Button'

export const ButtonGroup = ({ data }) => {
  const defineClass = () => {
    let _class = 'btn btn-secondary'
    return _class
  }

  return (
    <div className='button-group'>
      {
        _map(data, (item, i) => <Button key={i}
          className={defineClass()}
          onChange={item.onChange}
          value={item.text} />)
      }
    </div>
  )
}

ButtonGroup.propTypes = {
  data: PropTypes.array
}

export default ButtonGroup
