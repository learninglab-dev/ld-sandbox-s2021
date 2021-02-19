/** @jsxImportSource theme-ui */
import React from 'react'
import { motion } from 'framer-motion'
import useScrubKeyframes from '../hooks/useScrubKeyframes'
import useScene from '../hooks/useScene'


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

    const scene3Percent = useScene(3, scrub)
    //setup the shaking animation, which can ultimately be a built in function
    const shakeDuration = endShake-startShake
    const shakeSegment = shakeDuration/8
    const boxKeyframes = {
      [startShake]:{
        y:y,
        x:x
      },
      [startShake+shakeSegment]:{
        y:y+.25,
        x:x-.25
      },
      [startShake+(shakeSegment*2)]:{
        y:y,
        x:x
      },
      [startShake+(shakeSegment*3)]:{
        y:y+.25,
        x:x-.25
      },
      [startShake+(shakeSegment*4)]:{
        y:y,
        x:x
      },
      [startShake+(shakeSegment*5)]:{
        y:y+.25,
        x:x-.25
      },
      [startShake+(shakeSegment*6)]:{
        y:y,
        x:x
      },
      [startShake+(shakeSegment*7)]:{
        y:y+.25,
        x:x-.25
      },
      [endShake]:{
        y:y,
        x:x
      },
      [endShake+5]:{
        opacity:1
      },
      [out]:{
        opacity:0
      },
    }
    const opacityParams = {
      init:false,
      unit:'',
      type:'opacity',
      keyframes:boxKeyframes
    }
    const opacity = useScrubKeyframes(opacityParams, scene3Percent)
    const yParams = {
      init:false,
      unit:'vh',
      type:'y',
      keyframes:boxKeyframes
    }
    const top = useScrubKeyframes(yParams, scene3Percent)
    const xParams = {
      init:false,
      unit:'vw',
      type:'x',
      keyframes:boxKeyframes
    }
    const left = useScrubKeyframes(xParams, scene3Percent)


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
          display:scene3Percent > 0 ? 'flex' : 'none'
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
