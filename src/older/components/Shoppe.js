import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import ShoppeInner from "./ShoppeInner";
import ForestInner from "./ForestInner";
import useLeftStore from "./store/useLeftStore"; 
import useAnimalStore from "./store/useAnimalStore"; 

const Shoppe = () => {
  // Zustand state
  const { shoppeScene, forestScene } = useLeftStore();
  const { animalChoice } = useAnimalStore();

  // Memoized components
  const shoppeInnerStage = useMemo(() => {
    return <ShoppeInner />;
  }, []);

  const forestInnerStage = useMemo(() => {
    return <ForestInner />;
  }, []);

  return (
    <motion.section className="shoppe">
      <AnimatePresence>
        {shoppeScene === true && animalChoice === "badger" ? (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer background"
          >
            {shoppeInnerStage}
          </motion.div>
        ) : null}

        {forestScene === true ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer"
          >
            {forestInnerStage}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default Shoppe;
