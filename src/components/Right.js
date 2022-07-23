import {motion} from 'framer-motion'
import {useState} from 'react'

const rightVariant = {
  start: {
    opacity: 0,
    scale: 0.5
  },
  normal: {
    opacity: 1, 
    scale: 1
  },
  large: {
    opacity: 1, 
    scale: 2
  },
  largest: {
    opacity: 1, 
    scale: 3
  },

}
const Right = () => {

  const [animateInfo, setAnimateInfo] = useState("normal")
  const handleAnimate = (choice) => {
    setAnimateInfo(choice)
  }
    return (
        <motion.div 
        variants={rightVariant}
        initial="start"
      animate={animateInfo}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
          
          className="textBox">
            <button
            onClick={()=> handleAnimate("normal")}
            >Normal</button>
            <button
            onClick={()=> handleAnimate("large")}
            >Large</button>
            <button
            onClick={()=> handleAnimate("largest")}
            >Largest</button>
            <p>UI 2</p>
            <p>Information</p>
            <p>Images</p>
          </motion.div>
    )
}
export default Right