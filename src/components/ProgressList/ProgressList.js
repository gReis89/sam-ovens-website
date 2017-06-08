import React from 'react'
import PropTypes from 'prop-types'
import _map from 'lodash/map'
import iconOk from 'assets/imgs/icon-ok.svg'
import iconCurrent from 'assets/imgs/icon-current.svg'
import './progressList.scss'

export const ProgressList = ({ data }) => {
  return (
    <div className='progress-list'>
      <ul>
        {
          _map(data, (item, i) => {
            return <li key={i}>
              <span className={item.status === 'inprogress' ? 'strong' : ''}>{item.description}</span>
              {
                (item.status === 'done' || item.status === 'inprogress') &&
                (<img className={item.status === 'inprogress' ? 'pull-right inprogress' : 'pull-right'}
                  src={item.status === 'done' ? iconOk : iconCurrent} />)
              }
            </li>
          })
        }
      </ul>
    </div>
  )
}

ProgressList.propTypes = {
  data: PropTypes.array.isRequired
}

export default ProgressList
