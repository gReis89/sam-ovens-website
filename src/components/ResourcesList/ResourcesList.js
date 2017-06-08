import React from 'react'
import PropTypes from 'prop-types'
import _map from 'lodash/map'
import iconDownload from 'assets/imgs/icon-download.svg'
import './ResourcesList.scss'

export const ResourcesList = ({ data }) => (
  <ul className='resource-list'>
    {
      _map(data, (item, i) => {
        return <li key={i}>
          <a href={item.link}>{item.name} <img src={iconDownload} className='pull-right' /></a>
        </li>
      })
    }
  </ul>
)

ResourcesList.propTypes = {
  data: PropTypes.array.isRequired
}

export default ResourcesList
