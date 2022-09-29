import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CartographBackground from "./cartograph/CartographBackground";
import AdventureStage from "./AdventureStage";
import CartographStage from "./CartographStage";

const RightStage = ({ loadMap }) => {
  const [toggler, setToggler] = useState(true);
  const [advChoice, setAdvChoice] = useState("church");

  const handleImageChoice = (option) => {
    setToggler(false);
    setAdvChoice((prev) => option);
  };

  const toggleMap = () => {
    setToggler(false);
    console.log('mmmm')
  };

  return (
    <motion.section className="information">
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadMap ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="infoContainer"
          >
            <AdventureStage
              toggleMap={toggleMap}
              toggler={toggler}
              setToggler={setToggler}
              advChoice={advChoice}
            />
            <CartographBackground
            toggler={toggler} />
            <CartographStage
              toggler={toggler}
              toggleMap={toggleMap}
              handleImageChoice={handleImageChoice}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default RightStage;
