import React from 'react'
import PropTypes from 'prop-types'

export const VideoPlayer = ({ id }) => (
  <div className='video'>
    <iframe src={`//fast.wistia.net/embed/iframe/${id}`}
      allowTransparency frameBorder='0'
      scrolling='no' className='wistia_embed' name='wistia_embed'
      allowFullScreen width='100%' height='479' />
  </div>
)

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired
}

export default VideoPlayer
