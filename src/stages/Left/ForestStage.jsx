import forest from './assets/forest2.png'
import { motion, AnimatePresence } from "framer-motion";


const ForestStage = () => {
    return (
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
         
    )
}

export default ForestStage