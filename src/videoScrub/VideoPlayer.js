/** @jsxImportSource theme-ui */
import React, {
  useRef,
  useEffect
} from 'react'
import eyeballs from '../assets/eyeballs.mp4'


export default function VideoPlayer({ scrub }) {
  const video = useRef(null)

  useEffect(() => {
    if (video.current.duration) {
      const duration = video.current.duration
      const percentToTime = duration*scrub
      console.log(video.current)
      console.log(duration)
      video.current.currentTime = percentToTime
    }
  }, [scrub])

  return (
    <video
      controls
      preload='auto'
      ref={video}
      sx={{
        height:'auto',
        width:'50vw'
      }}>
      <source
        src={eyeballs}
        type='video/mp4'/>
    </video>
  )
}
