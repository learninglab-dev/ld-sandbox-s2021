/** @jsxImportSource theme-ui */
import React from 'react'
import useWheelY from '../hooks/useWheelY'
import Layout from './Layout'


export default function Controller() {
  const scrollStatus = useWheelY(2)
  const scrollPercent = scrollStatus.percent

  return (
    <Layout scrollPercent={scrollPercent}/>
  )
}
