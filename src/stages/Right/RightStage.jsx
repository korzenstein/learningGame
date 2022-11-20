import { motion, AnimatePresence } from "framer-motion";
import CartographBackground from "./cartographPuppets/CartographBackground";
import AdventureScene from "./AdventureScene";
import CartographScene from "./CartographScene";
import { useSelector } from "react-redux";

const RightStage = () => {
  
  const rightStageValue = useSelector((state) => state.right.rightStage);

  return (
    <motion.section className="information">
      <AnimatePresence exitBeforeEnter initial={false}>
        {rightStageValue ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="infoContainer"
          >
            <CartographBackground />
            <AdventureScene />
            <CartographScene />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default RightStage;
