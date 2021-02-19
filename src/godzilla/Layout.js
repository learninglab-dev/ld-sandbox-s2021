/** @jsxImportSource theme-ui */
import React from 'react'
import Lottie from './Lottie'
import AnimatedLetter from './Letter'
import AnimatedBox from './Box'
import { useMotionValue, motion } from 'framer-motion'
import getScrubValues from '../utils/getScrubValues'
import useScrub from '../hooks/useScrub'
import useScrubKeyframes from '../hooks/useScrubKeyframes'
import useScene from '../hooks/useScene'


export default function Layout({ scrollPercent }) {
  const opacity = useMotionValue(1)
  const titleMotionVals = [
    {val:opacity,from:1,to:0,unit:''}
  ]
  getScrubValues(scrollPercent,0.02,0.1,titleMotionVals)

  const top = useMotionValue(0)
  const secondTop = useMotionValue(100)
  const nextSectionVals = [
    {val:top,from:0,to:-60,unit:'vh'},
    {val:secondTop,from:100,to:40,unit:'vh'}
  ]
  getScrubValues(scrollPercent,0.9,1,nextSectionVals)

  const scene3 = useScene(3, scrollPercent)
  const squareKeyframes = {
    0:{left:5},
    50:{left:25},
    100:{left:5}
  }
  const squareParams = {
    init:true,
    unit:'vw',
    type:'left',
    keyframes:squareKeyframes
  }
  const left = useScrubKeyframes(squareParams, scene3)

  const scene2 = useScene(2, scrollPercent)
  const circleKeyframes = {
    0:{
      left:5,
      radius:100
    },
    50:{
      left:95,
    },
    75:{
      radius:200,
    },
    100:{
      left:5,
      radius:50
    },
  }
  const circleParams = {
    init:true,
    unit:'vw',
    type:'left',
    keyframes:circleKeyframes
  }
  const circleLeft = useScrubKeyframes(circleParams, scene2)
  const radiusParams = {
    init:true,
    unit:'px',
    type:'radius',
    keyframes:circleKeyframes
  }
  const height = useScrubKeyframes(radiusParams, scene2)
  const width = useScrubKeyframes(radiusParams, scene2)


  return (
    <main>
      <motion.section
        style={{top:top}}
        sx={{
          position:scrollPercent >= .9 ? 'absolute' : '',
          display:'flex',
          flexDirection:'column',
          pr:'20%',
          pl:'20%',
          pt:'10%',
          justifyContent:'flex-start',
          height:'100vh',
        }}>
        <motion.div
          style={{left:left}}
          sx={{
            position:'absolute',
            height:'100px',
            width:'100px',
            bg:'Purple',
            top:'10vh',
          }}>
        </motion.div>
        <motion.div
          style={{
            left:circleLeft,
            height:height,
            width:width,
          }}
          sx={{
            position:'absolute',
            bg:'Marigold',
            top:'50vh',
            borderRadius:'50%',
          }}>
        </motion.div>
        <motion.h1
          style={{opacity:opacity}}
          sx={{
          fontFamily:'fatserif',
          color:'DarkPurple',
          fontSize:'5vmin',
          lineHeight:'6vmin'
        }}>
          Lottie Demo
        </motion.h1>
        <motion.p
          style={{opacity:opacity}}
          sx={{
          fontFamily:'body',
          color:'DarkGrey2',
          fontSize:'2vmin',
          lineHeight:'3vmin'
        }}>
          scroll to continue
        </motion.p>
        <AnimatedLetter
          val='G'
          scrub={scrollPercent}
          start={0.02}
          end={0.12}
          x='20vw'
          y={25}
          />
        <AnimatedLetter
          val='O'
          scrub={scrollPercent}
          start={0.07}
          end={0.17}
          x='28.5vw'
          y={24}
          />
        <AnimatedLetter
          val='D'
          scrub={scrollPercent}
          start={0.12}
          end={0.22}
          x='37vw'
          y={22}
          />
        <AnimatedLetter
          val='Z'
          scrub={scrollPercent}
          start={0.17}
          end={0.27}
          x='44.5vw'
          y={26}
          />
        <AnimatedLetter
          val='I'
          scrub={scrollPercent}
          start={0.22}
          end={0.32}
          x='52vw'
          y={27}
          />
        <AnimatedLetter
          val='L'
          scrub={scrollPercent}
          start={0.27}
          end={0.37}
          x='57vw'
          y={23}
          />
        <AnimatedLetter
          val='L'
          scrub={scrollPercent}
          start={0.32}
          end={0.42}
          x='64.5vw'
          y={23}
          />
        <AnimatedLetter
          val='A'
          scrub={scrollPercent}
          start={0.37}
          end={0.47}
          x='72vw'
          y={25}
          />
        <AnimatedBox
          val='!@#^$&^*!'
          scrub={scrollPercent}
          startShake={0.55}
          endShake={0.7}
          out={.8}
          x={25}
          y={60}
          />
        <Lottie scrub={scrollPercent}/>
    </motion.section>
    <motion.section
      style={{top:secondTop}}
      sx={{
        position:scrollPercent >= .9 ? 'absolute' : '',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100vw',
        height:'60vh'
      }}>
      <p
        sx={{
          fontFamily:'body',
          color:'DarkGrey2',
          fontSize:'2vmin',
          lineHeight:'3vmin'
        }}>
        next section here
      </p>
    </motion.section>
  </main>
  )
}
