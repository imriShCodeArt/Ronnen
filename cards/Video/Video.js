import React from 'react'

const Video = () => {
  return (
    <iframe
      width={'100%'}
      height={'550px'}
      src="https://www.youtube.com/embed/lCy1wy5UeW8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

export default Video
