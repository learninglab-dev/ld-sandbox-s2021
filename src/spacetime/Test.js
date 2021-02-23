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
  const test = useScrub(keyframes, progress.percent)
  const sizeKeyframes = {
    0: '5vw',
    50: '10vw',
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

  return (
    <motion.div
      style={{
        fontSize:size,
        opacity:test
      }}>
      hello
      <motion.div
      style={{
        width:width,
        backgroundColor: 'red',
        height:'200px'
      }}>
      </motion.div>
    </motion.div>
  )
}
export default Test
