import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import Map from './Map'
import map from "../assets/mapalt.png";

const Information = ({ loadMap }) => {
  const [animateInfo, setAnimateInfo] = useState("normal");
  const handleAnimate = (choice) => {
    setAnimateInfo(choice);
  };
  return (
    
    <motion.section
      className="information"
    >
      <AnimatePresence exitBeforeEnter initial={false}>
      
        {loadMap ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="infoContainer "
          >
            <motion.img 
            initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
            className="map" src={map} alt="Map of lands" />
          </motion.div>
        ) : 
        null
        }
        </AnimatePresence>
      
    </motion.section>
    
  );
};
export default Information;
