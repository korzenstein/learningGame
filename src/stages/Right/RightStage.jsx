import { motion, AnimatePresence } from "framer-motion";
import CartographBackground from "./cartographPuppets/CartographBackground";
import AdventureScene from "./AdventureScene";
import CartographScene from "./CartographScene";
import useLeftStore from "../../store/useLeftStore";

const RightStage = () => {
    const { cartographScene } = useLeftStore();


  return (
    <motion.section className="information">
      <AnimatePresence>
        {cartographScene ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
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
