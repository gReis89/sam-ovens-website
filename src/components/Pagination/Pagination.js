import React from 'react'
import PropTypes from 'prop-types'

export const Pagination = ({ nPages, active }) => {
  const generatePages = () => {
    let list = []
    for (let i = 1; i < nPages + 1; i++) {
      i !== active
      ? list.push(<li key={i}>{i}</li>)
      : list.push(<li className='active' key={i}>{i}</li>)
    }
    return list
  }
  return (
    <ul className='pagination'>
      {
        generatePages()
      }
    </ul>
  )
}

Pagination.propTypes = {
  nPages: PropTypes.number.isRequired,
  active: PropTypes.number
}

export default Pagination
