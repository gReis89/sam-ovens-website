import React, { PropTypes } from 'react'
import './TrainingBanner.scss'

export const TrainingBanner = ({ title, subtitle }) => (
  <div className='training-banner'>
    <h6>{subtitle}</h6>
    <h2>{title}</h2>
  </div>
)

TrainingBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default TrainingBanner
