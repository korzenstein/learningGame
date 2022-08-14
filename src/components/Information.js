import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InformationInner from "./InformationInner";
// import Map from './Map'
import map from "../assets/cartograph.png";
import stained from "../assets/stained.png";
// import Stained from './informationParts/Stained'

const Information = ({ loadMap, forestBird }) => {
  const [animateInfo, setAnimateInfo] = useState("normal");
  const [toggler, setToggler] = useState(true);

  const handleAnimate = (choice) => {
    setAnimateInfo(choice);
  };
  return (
    <motion.section className="information">
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
              onClick={() => setToggler(!toggler)}
              className="stained inner"
              initial={{ opacity: 0 }}
              animate={
                toggler === false
                  ? { opacity: 1, zIndex: 100 }
                  : { opacity: 0, zIndex: 20 }
              }
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              src={stained}
              alt="Stained glass design"
            />

            <motion.img
              className="mapImage inner"
              initial={{ opacity: 0 }}
              animate={
                toggler === true
                  ? { opacity: 0.5, zIndex: 30 }
                  : { opacity: 0, zIndex: 20 }
              }
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              src={map}
              alt="Map of lands"
            />
            <InformationInner toggler={toggler} setToggler={setToggler} />
          </motion.div>
        ) : null}
        
      </AnimatePresence>
    </motion.section>
  );
};
export default Information;
