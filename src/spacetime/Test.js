import useScrub from '../hooks/useScrub'
import useWheelY from '../hooks/useWheelY'
import { motion } from 'framer-motion'

const Test = () => {
  const progress = useWheelY(5)
  const keyframes = {
    0: .25,
    50: .50,
    100: 1
  }
  const opacity = useScrub(keyframes, progress.percent)
  const leftkfs = {
    0: '100px',
    25: '200px',
    50: '-100px',
    100: '100px'
  }
  const left = useScrub(leftkfs, progress.percent)
  const sizeKeyframes = {
    0: '5vw',
    50: '30vw',
    100: '5vw'
  }
  const size = useScrub(sizeKeyframes, progress.percent, [.5,.75])
  const widthkfs = {
    0: '100px',
    25: '200px',
    50: '500px',
    100: '100px'
  }
  const width = useScrub(widthkfs, progress.percent)
  const colorKfs = {
      0: 'rgba(255,0,0,.75)',
      50: 'rgba(0,255,0,1)',
      100: 'rgba(0,0,255,.5)'
    }
    const color = useScrub(colorKfs, progress.percent)

  return (
    <motion.div
      style={{
        fontSize:size,
        position:'absolute',
        top:'0px',
        left:left,
        opacity:opacity
      }}>
      hello
      <motion.div
      style={{
        width:width,
        backgroundColor:color,
        height:'200px'
      }}>
      </motion.div>
    </motion.div>
  )
}
export default Test
