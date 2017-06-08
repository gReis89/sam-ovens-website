import React from 'react'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import LessonView from 'routes/LessonScreen'
import './CoreLayout.scss'
import 'assets/styles/core.scss'

export const CoreLayout = () => (
  <div>
    <Header />
    <div className='container'>
      <Sidebar />
      <div className='main'>
        <div className='holder'>
          <LessonView />
        </div>
        <Footer />
      </div>
    </div>
  </div>
)

export default CoreLayout
