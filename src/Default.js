/** @jsxImportSource theme-ui */
import React from 'react'
import { Link } from 'react-router-dom'


export default function Default () {
  return (
    <main
      sx={{
        bg:'background',
        p:'10%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        height:'100vh',
        width:'100vw',
      }}>
      <h1
        sx={{
          fontFamily:'fatserif',
          color:'DarkPurple',
          fontSize:'7vmin',
          lineHeight:'8vmin'
        }}>
        LD Sandbox S2021
      </h1>
      <p
        sx={{
          fontFamily:'body',
          color:'DarkGrey2',
          fontSize:'2vmin',
          lineHeight:'3vmin'
        }}>
        here's what's in the sandbox right now:
      </p>
      <ul>
        <li
          sx={{
            fontFamily:'body',
            color:'DarkGrey2',
            fontSize:'2vmin',
            lineHeight:'3vmin',
          }}>
          <Link
            to='/video-scrub'
            sx={{
              color:'DarkGrey2',
              ':visited': {
                color:'DarkGrey2'
              },
              ':hover': {
                color:'Purple'
              },
              ':active': {
                color:'DarkGrey2'
              },
            }}>
            video scrub via scroll demo
          </Link>
        </li>
        <li
          sx={{
            fontFamily:'body',
            color:'DarkGrey2',
            fontSize:'2vmin',
            lineHeight:'3vmin',
          }}>
          <Link
            to='/godzilla'
            sx={{
              color:'DarkGrey2',
              ':visited': {
                color:'DarkGrey2'
              },
              ':hover': {
                color:'Purple'
              },
              ':active': {
                color:'DarkGrey2'
              },
            }}>
            lottie scroll demo
          </Link>
        </li>
      </ul>
    </main>
  )
}
