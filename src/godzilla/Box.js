/** @jsxImportSource theme-ui */
import React from 'react'
import {
  useMotionValue,
  motion
} from 'framer-motion'
import getScrubValues from '../utils/getScrubValues'


export default function Box(props) {
    const {
      scrub,
      val,
      startShake,
      endShake,
      out,
      y=25,
      x='200px'
    } = props
    const top = useMotionValue(`${y}vh`)
    const left = useMotionValue(`${x}vw`)
    const opacity = useMotionValue(1)

    const boxOutVals = [
      {val:opacity,from:1,to:0,unit:''}
    ]
    const boxShakeLeftVals = [
      {val:top,from:y,to:y+.25,unit:'vh'},
      {val:left,from:x,to:x-.25,unit:'vw'}
    ]
    const boxShakeRightVals = [
      {val:top,from:y+.25,to:y,unit:'vh'},
      {val:left,from:x-.25,to:x,unit:'vw'}
    ]
    const shakeDuration = endShake-startShake
    const shakeSegment = shakeDuration/8
    getScrubValues(scrub,startShake,startShake+shakeSegment,boxShakeLeftVals)
    getScrubValues(scrub,startShake+shakeSegment,startShake+(shakeSegment*2),boxShakeRightVals)
    getScrubValues(scrub,startShake+(shakeSegment*2),startShake+(shakeSegment*3),boxShakeLeftVals)
    getScrubValues(scrub,startShake+(shakeSegment*3),startShake+(shakeSegment*4),boxShakeRightVals)
    getScrubValues(scrub,startShake+(shakeSegment*4),startShake+(shakeSegment*5),boxShakeLeftVals)
    getScrubValues(scrub,startShake+(shakeSegment*5),startShake+(shakeSegment*6),boxShakeRightVals)
    getScrubValues(scrub,startShake+(shakeSegment*6),startShake+(shakeSegment*7),boxShakeLeftVals)
    getScrubValues(scrub,startShake+(shakeSegment*7),startShake+(shakeSegment*8),boxShakeRightVals)

    getScrubValues(scrub,endShake+.05,out,boxOutVals)

    return (
      <motion.div
        style={{
          top:top,
          left:left,
          opacity:opacity,
        }}
        sx={{
          fontFamily:'body',
          color:'DarkGrey1',
          fontSize:'1.5vw',
          position:'absolute',
          zIndex:100,
          bg:'Orange2',
          height:'5vw',
          width:'fit-content',
          p:'1vw',
          justifyContent:'center',
          alignItems:'center',
          display:scrub >= startShake ? 'flex' : 'none'
        }}>
        <motion.h3
          sx={{
            m:0,
          }}>
          {val}
        </motion.h3>
      </motion.div>
    )
}
