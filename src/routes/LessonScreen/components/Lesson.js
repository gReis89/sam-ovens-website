import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from 'components/VideoPlayer'
import Button from 'components/Button'
import ResourcesList from 'components/ResourcesList'
import LessonController from './LessonController'
import iconBlackDown from 'assets/imgs/icon-arrow-black-down.svg'
import iconBlackUp from 'assets/imgs/icon-arrow-black-up.svg'
import iconOk from 'assets/imgs/icon-ok.svg'

export const Lesson = ({ data, goPrev, goNext, showLesson, hideLesson, lessonVisible }) => (
  <div className='lesson'>
    <section className='title'>
      <div className='text-center visible-xs'>
        <img src={iconOk} />
      </div>
      <h5 className='text-light'>{data.course} / {data.week}</h5>
      <h1>{data.title}</h1>
      <div className='visible-xs'>
        <a onClick={hideLesson} className={lessonVisible ? '' : 'hide'}><img src={iconBlackDown} /></a>
        <a onClick={showLesson} className={!lessonVisible ? '' : 'hide'}><img src={iconBlackUp} /></a>
      </div>
    </section>

    <div className={lessonVisible ? '' : 'hidden-xs'}>
      <section className='video-box'>
        <VideoPlayer id={data.video} />
        <LessonController goPrev={goPrev} goNext={goNext} />
      </section>

      <div className='info'>
        <section className='row lesson-about'>
          <div className='col-md-7'>
            <h5>About this lesson</h5>
            <div className='about-text' dangerouslySetInnerHTML={{ __html: data.about }} />
          </div>
          <div className='col-md-offset-1 col-md-4 resources'>
            <h5>Resources</h5>
            <ResourcesList data={data.resources} />
          </div>
        </section>

        <section className='video-transcript'>
          <div className='clearfix'>
            <h5 className='pull-left'>Full video transcript</h5>
            <a href='#' className='expand-view pull-right'>Expand View</a>
          </div>
          <div className='transcript-box'>
            <div dangerouslySetInnerHTML={{ __html: data.transcript }} />
            <div className='read-more text-center'>
              <Button value='Read More' type='primary' />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
)

Lesson.propTypes = {
  data: PropTypes.object.isRequired,
  goPrev: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  showLesson: PropTypes.func.isRequired,
  hideLesson: PropTypes.func.isRequired,
  lessonVisible: PropTypes.bool.isRequired
}

export default Lesson
