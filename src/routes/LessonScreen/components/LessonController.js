import React from 'react'
import PropTypes from 'prop-types'
import iconArrowLeft from 'assets/imgs/icon-arrow-left.svg'
import iconArrowRight from 'assets/imgs/icon-arrow-right.svg'
import './LessonController.scss'

export const LessonController = ({ goPrev, goNext }) => (
  <div className='lesson-controller'>
    <a className='prev' onClick={goPrev}><img src={iconArrowLeft} /> Previous Lesson</a>
    <a className='next' onClick={goNext}>Next Lesson <img src={iconArrowRight} /></a>
  </div>
)

LessonController.propTypes = {
  goPrev: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired
}

export default LessonController
