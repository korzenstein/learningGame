import forest from './assets/forest2.png'
import { motion } from "framer-motion";
import Sleepy from './forestPuppets/Sleepy'

const ForestScene = () => {
    return (
      <>
            <motion.img
              className="forest inner"
              initial={{ opacity: 0 }}
              animate={{opacity: [0.55, 1, 0.55] }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 17, repeat: Infinity }}
              // transition={{ ease: "easeInOut", duration: 0.5 }}
              src={forest}
              alt="Scene of the forest interior"
            />
            <Sleepy/>
            </>
         
    )
}

export default ForestScene