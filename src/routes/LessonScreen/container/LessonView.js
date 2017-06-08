import React from 'react'
import './LessonView.scss'
import Lesson from '../components/Lesson'
import lesson from 'api/lesson-data.json'

export class LessonView extends React.Component {
  constructor () {
    super()
    this.state = {
      lessonIsVisible: true
    }
  }

  goToNextLesson = () => {
    console.log('next lession')
  }

  goToPrevLesson = () => {
    console.log('prev lession')
  }

  showLesson = () => {
    this.setState({ lessonIsVisible: true })
  }

  hideLesson = () => {
    this.setState({ lessonIsVisible: false })
  }

  render () {
    return (
      <div>
        <Lesson data={lesson}
          goPrev={this.goToPrevLesson}
          goNext={this.goToNextLesson}
          showLesson={this.showLesson}
          hideLesson={this.hideLesson}
          lessonVisible={this.state.lessonIsVisible} />
      </div>
    )
  }
}

export default LessonView
