/** @jsxImportSource theme-ui */
import React from 'react'
import Lottie from './Lottie'
import AnimatedLetter from './Letter'
import AnimatedBox from './Box'
import { motion } from 'framer-motion'
import useScrubKeyframes from '../hooks/useScrubKeyframes'
import useScene from '../hooks/useScene'


export default function Layout({ scrollPercent }) {
  //get current state relativized to the scenes we're animating in in this component
  //useScene([scene num],[current global percent])
  const scene1Percent = useScene(1, scrollPercent)
  const scene3Percent = useScene(3, scrollPercent)
  const scene4Percent = useScene(4, scrollPercent)

  //setup the animation for the title fade out; the transition takes place from 4-20% of scene1
  const titleKeyframes = {
    4:{
      opacity:1
    },
    20:{
      opacity:0
    }
  }
  //the 'type' field needs to match the relevant key in your keyframes object
  //init is a bool; true if you want the element to appear as the first keyframe on load and false if not until it begins animating; this is mainly for elements you want to intially position via a flexbox and then later set to position absolute and animate
  //unit is the css units, e.g. 'px' or 'vw'
  const titleParams = {
    init:true,
    unit:'',
    type:'opacity',
    keyframes:titleKeyframes
  }
  //useScrubKeyframes([params object],[relevant current percent])
  const titleOpacity = useScrubKeyframes(titleParams, scene1Percent)

  //setup the animation for "scrolling" up after we've finished the lottie animation
  //the same keyframes object can be used for multiple properties
  const scrollKeyframes = {
    0:{
      firstTop:0,
      secondTop:100,
    },
    100:{
      firstTop:-60,
      secondTop:40
    }
  }
  const firstTopParams = {
    init:true,
    unit:'vh',
    type:'firstTop',
    keyframes:scrollKeyframes
  }
  const firstTop = useScrubKeyframes(firstTopParams, scene4Percent)
  const secondTopParams = {
    init:true,
    unit:'vh',
    type:'secondTop',
    keyframes:scrollKeyframes
  }
  const secondTop = useScrubKeyframes(secondTopParams, scene4Percent)

  //setup the animation for the circle and square, which have just been my test elements. these happen in scene3; which overlaps scene2
  //the same keyframes object can be used for multiple elements in the same scene if you prefer
  //and not every property needs to be listed at each frame; the algorithm will interpolate
  const shapeKeyframes = {
    0:{
      cLeft:5,
      sLeft:5,
      radius:100
    },
    50:{
      cLeft:95,
      sLeft:25,
    },
    75:{
      radius:200,
    },
    100:{
      cLeft:5,
      sLeft:5,
      radius:50
    },
  }
  const squareParams = {
    init:true,
    unit:'vw',
    type:'sLeft',
    keyframes:shapeKeyframes
  }
  const squareLeft = useScrubKeyframes(squareParams, scene3Percent)
  const circleLeftParams = {
    init:true,
    unit:'vw',
    type:'cLeft',
    keyframes:shapeKeyframes
  }
  const circleLeft = useScrubKeyframes(circleLeftParams, scene3Percent)
  const radiusParams = {
    init:true,
    unit:'px',
    type:'radius',
    keyframes:shapeKeyframes
  }
  const radius = useScrubKeyframes(radiusParams, scene3Percent)


  return (
    <main>
      <motion.section
        style={{top:firstTop}}
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
          style={{left:squareLeft}}
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
            height:radius,
            width:radius,
          }}
          sx={{
            position:'absolute',
            bg:'Marigold',
            top:'50vh',
            borderRadius:'50%',
          }}>
        </motion.div>
        <motion.h1
          style={{opacity:titleOpacity}}
          sx={{
          fontFamily:'fatserif',
          color:'DarkPurple',
          fontSize:'5vmin',
          lineHeight:'6vmin'
        }}>
          Lottie Demo
        </motion.h1>
        <motion.p
          style={{opacity:titleOpacity}}
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
          start={0}
          end={15}
          x='20vw'
          y={25}
          />
        <AnimatedLetter
          val='O'
          scrub={scrollPercent}
          start={10}
          end={25}
          x='28.5vw'
          y={24}
          />
        <AnimatedLetter
          val='D'
          scrub={scrollPercent}
          start={20}
          end={35}
          x='37vw'
          y={22}
          />
        <AnimatedLetter
          val='Z'
          scrub={scrollPercent}
          start={30}
          end={45}
          x='44.5vw'
          y={26}
          />
        <AnimatedLetter
          val='I'
          scrub={scrollPercent}
          start={40}
          end={55}
          x='52vw'
          y={27}
          />
        <AnimatedLetter
          val='L'
          scrub={scrollPercent}
          start={50}
          end={65}
          x='57vw'
          y={23}
          />
        <AnimatedLetter
          val='L'
          scrub={scrollPercent}
          start={60}
          end={75}
          x='64.5vw'
          y={23}
          />
        <AnimatedLetter
          val='A'
          scrub={scrollPercent}
          start={70}
          end={85}
          x='72vw'
          y={25}
          />
        <AnimatedBox
          val='!@#^$&^*!'
          scrub={scrollPercent}
          startShake={0}
          endShake={80}
          out={100}
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
