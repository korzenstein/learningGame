import {motion} from 'framer-motion'
import {useState} from 'react'
// import Map from './Map'
import map from '../assets/mapalt.png'

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
const Information = ({mushCount}) => {

  const [animateInfo, setAnimateInfo] = useState("normal")
  const handleAnimate = (choice) => {
    setAnimateInfo(choice)
  }
    return (
        <motion.section 
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
          className="information">
            <div className="infoContainer ">
            <motion.img 
            className="map"
            src={map} alt="Map of lands" />

            </div>
        
          
            
          </motion.section>
    )
}
export default Information