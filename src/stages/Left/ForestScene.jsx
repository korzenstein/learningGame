import forest from './assets/forest2.png'
import { motion } from "framer-motion";
import Sleepy from './forestPuppets/Sleepy'
import {useSelector} from 'react-redux'

const ForestScene = () => {

const sleepyValue = useSelector((state) => state.forest.sleepyGhost);

const forestVariants = {
  initial: { opacity: 0 },
  exit: { opacity: 0},
  standard: {opacity: [0.55, 1, 0.55], transition: { ease: "easeInOut", duration: 17, repeat: Infinity } },
  // zoomin: {scale: [1, 1.4, 1], transition: { duration: 2 },}
}
    return (
      <>
            <motion.img
              className="forest inner"
              variants={forestVariants}
              initial="initial"
              animate={sleepyValue ? "zoomin" : "standard"}
              exit="exit"
              // transition={{ ease: "easeInOut", duration: 17, repeat: Infinity }}
              src={forest}
              alt="Scene of the forest interior"
            />
            <Sleepy/>
            </>
         
    )
}

export default ForestScene