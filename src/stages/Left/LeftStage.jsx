import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import ShoppeStage from "./ShoppeStage";
import ForestStage from "./ForestStage";

const LeftStage = ({ loadShoppe, animalChoice, forestBird }) => {
  const ShoppeStageMemo = useMemo(() => {
    return <ShoppeStage />;
  }, []);

  const ForestStageMemo = useMemo(() => {
    return <ForestStage />;
  }, []);

  return (
    <motion.section className="shoppe">
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadShoppe && animalChoice === "badger" ? (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer background"
          >
            {ShoppeStageMemo}
          </motion.div>
        ) : null}

        {forestBird ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer "
          >
            {ForestStageMemo}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default LeftStage;
