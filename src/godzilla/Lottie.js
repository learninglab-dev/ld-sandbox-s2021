/** @jsxImportSource theme-ui */
import React, {
  useRef,
  useEffect
} from 'react'
import Lottie from 'lottie-web'
import godzilla from '../assets/GodzillaScroll.json'


export default function LottiePlayer({ scrub }) {
  const lottie = useRef(null)
  const lottieContainer = useRef(null)
  const frames = useRef(null)

  useEffect(() => {
    if (lottieContainer.current && !lottie.current) {
      lottie.current = Lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData:godzilla
      })
      lottie.current.setSpeed(.8)
      frames.current = lottie.current.getDuration(true)
    }
  }, [])

  useEffect(() => {
    if (lottie.current) {
      const scrubFrames = Math.round(scrub*1.5*frames.current)
      if (scrubFrames >=  38) {
        lottie.current.goToAndStop(38, true)
        return
      }
      lottie.current.goToAndStop(scrubFrames, true)
    }
  }, [scrub])


  return (
    <div
      ref={lottieContainer}
      sx={{
        height:'auto',
        width:'100%'
      }}>
    </div>
  )
}
