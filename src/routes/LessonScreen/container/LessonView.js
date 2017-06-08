import React from 'react'
import './LessonView.scss'
import Lesson from '../components/Lesson'
import lesson from 'api/lesson-data.json'

export class LessonView extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  goToNextLesson () {
    console.log('next lession')
  }

  goToPrevLesson () {
    console.log('prev lession')
  }

  render () {
    return (
      <div>
        <Lesson data={lesson}
          goPrev={this.goToPrevLesson}
          goNext={this.goToNextLesson} />
      </div>
    )
  }
}

export default LessonView
