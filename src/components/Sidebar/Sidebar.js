import React from 'react'
import TrainingBanner from './components/TrainingBanner'
import BigSelector from 'components/BigSelector'
import ProgressList from 'components/ProgressList'
import ProgressPanel from 'components/ProgressPanel'
import progressList from 'api/progress-list.json'
import './Sidebar.scss'

export class Sidebar extends React.Component {

  render () {
    return (
      <div className='sidebar'>
        <TrainingBanner title='Million Dollar Sales Training' subtitle='week theme' />
        <BigSelector value='Week 2' />
        <ProgressList data={progressList} />
        <ProgressPanel progressNumber={42} />
      </div>
    )
  }
}

export default Sidebar
