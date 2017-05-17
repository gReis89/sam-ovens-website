import React from 'react'
import PropTypes from 'prop-types'
import _map from 'lodash/map'

export const DisplayList = ({ data }) => {
  const component = data.length
  ? (
    <div className='display-list'>
      <ol>
        {
          _map(data, (item, i) => <li key={i}>{item}</li>)
        }
      </ol>
    </div>
  )
  : <div className='display-list'>Add an item</div>

  return component
}

DisplayList.propTypes = {
  data: PropTypes.array.isRequired
}

export default DisplayList
