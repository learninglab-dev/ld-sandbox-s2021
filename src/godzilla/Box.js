/** @jsxImportSource theme-ui */
import React from 'react'
import { motion } from 'framer-motion'
import useScrub from '../hooks/useScrub'


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

    const opacity = useScrub({
      from:1,
      to:0,
      unit:'',
      start:endShake+.05,
      end:out
    }, scrub)

    const shakeDuration = endShake-startShake
    const shakeSegment = shakeDuration/8

    let shakeYSteps = []
    for (let i = 0; i < 8; i++) {
      if (i === 0 || i%2 === 0) {
        shakeYSteps.push(
          {
            init:y,
            from:y,
            to:y+.25,
            unit:'vh',
            start:startShake+(shakeSegment*i),
            end:startShake+(shakeSegment*(i+1)),
          }
        )
      } else {
        shakeYSteps.push(
          {
            from:y+.25,
            to:y,
            unit:'vh',
            start:startShake+(shakeSegment*i),
            end:startShake+(shakeSegment*(i+1)),
          }
        )
      }
    }
    const top = useScrub(shakeYSteps, scrub)

    let shakeXSteps = []
    for (let i = 0; i < 8; i++) {
      if (i === 0 || i%2 === 0) {
        shakeXSteps.push(
          {
            init:x,
            from:x,
            to:x-.25,
            unit:'vW',
            start:startShake+(shakeSegment*i),
            end:startShake+(shakeSegment*(i+1)),
          }
        )
      } else {
        shakeXSteps.push(
          {
            from:x-.25,
            to:x,
            unit:'vW',
            start:startShake+(shakeSegment*i),
            end:startShake+(shakeSegment*(i+1)),
          }
        )
      }
    }
    const left = useScrub(shakeXSteps, scrub)

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
