import React, { PropTypes } from 'react'
import { Circle } from 'rc-progress'
import Button from 'components/Button'
import './ProgressPanel.scss'

export const ProgressPanel = ({ progressNumber }) => (
  <div className='progress-panel'>
    <h5>Your progress</h5>
    <h4>{progressNumber}<sub>%</sub></h4>
    <Circle percent={progressNumber} strokeWidth='4' trailWidth='4' strokeColor='#10C45C' />
    <Button value='Progress Details' />
  </div>
)

ProgressPanel.propTypes = {
  progressNumber: PropTypes.number.isRequired
}

export default ProgressPanel
