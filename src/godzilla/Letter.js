/** @jsxImportSource theme-ui */
import React from 'react'
import {
  useMotionValue,
  useMotionTemplate,
  motion
} from 'framer-motion'
import getScrubValues from '../utils/getScrubValues'


export default function Letter(props) {
    const {
      scrub,
      val,
      start=0.02,
      end=0.2,
      y=25,
      x='200px'
    } = props
    const top = useMotionValue('-4vmin')
    const opacity = useMotionValue(0)
    const rotation = useMotionValue(0)
    const transform = useMotionTemplate`rotateY(${rotation})`

    const letterOpacityVals = [
      {val:opacity,from:0,to:1,unit:''}
    ]
    const letterMotionVals = [
      {val:top,from:-4,to:y,unit:'vmin'},
      {val:rotation,from:0,to:720,unit:'deg'}
    ]
    getScrubValues(scrub,start,start+.05,letterOpacityVals)
    getScrubValues(scrub,start,end,letterMotionVals)

    return (
      <motion.div
        style={{
          top:top,
          opacity:opacity,
        }}
        sx={{
          fontFamily:'fatserif',
          color:'HotPink',
          fontSize:'5vw',
          position:'absolute',
          left:x,
          zIndex:100,
        }}>
        <motion.h1
          style={{transform:transform}}
          sx={{
            m:0,
            textShadow:'5px 5px 5px #f0f4f8'
          }}>
          {val}
        </motion.h1>
      </motion.div>
    )
}
