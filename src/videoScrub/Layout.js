/** @jsxImportSource theme-ui */
import React from 'react'
import VideoPlayer from './VideoPlayer'


export default function Layout({ scrollPercent }) {
  return (
    <main
      sx={{
        display:'flex',
        flexDirection:'column',
        pr:'20%',
        pl:'20%',
        pt:'10%',
        justifyContent:'flex-start',
        height:'100vh',
      }}>
      <h1
        sx={{
        fontFamily:'fatserif',
        color:'DarkPurple',
        fontSize:'5vmin',
        lineHeight:'6vmin'
      }}>
        Scrolling Video Demo
      </h1>
      <p
        sx={{
        fontFamily:'body',
        color:'DarkGrey2',
        fontSize:'2vmin',
        lineHeight:'3vmin'
      }}>
        scroll to scrub through the video
      </p>
      <VideoPlayer scrub={scrollPercent}/>
    </main>
  )
}
