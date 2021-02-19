/** @jsxImportSource theme-ui */
import React from 'react'
import {
  useMotionTemplate,
  motion
} from 'framer-motion'
import useScrubKeyframes from '../hooks/useScrubKeyframes'
import useScene from '../hooks/useScene'


export default function Letter(props) {
    const {
      scrub,
      val,
      start=2,
      end=20,
      y=25,
      x='200px'
    } = props

    //relativize to the scene
    const scene2Percent = useScene(2, scrub)
    //a slightly more complex example of a keyframes object; with specific frame values coming in as props
    const letterKeyframes = {
      [start]:{
        top:-4,
        opacity:0,
        rotation:0
      },
      [start+5]:{
        opacity:1,
      },
      [end]:{
        top:y,
        rotation:720
      },
    }
    const topParams = {
      init:false,
      unit:'vmin',
      type:'top',
      keyframes:letterKeyframes
    }
    const top = useScrubKeyframes(topParams, scene2Percent)
    const opacityParams = {
      init:true,
      unit:'',
      type:'opacity',
      keyframes:letterKeyframes
    }
    const opacity = useScrubKeyframes(opacityParams, scene2Percent)
    const rotationParams = {
      init:false,
      unit:'deg',
      type:'rotation',
      keyframes:letterKeyframes
    }
    const rotation = useScrubKeyframes(rotationParams, scene2Percent)
    const transform = useMotionTemplate`rotateY(${rotation})`


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
