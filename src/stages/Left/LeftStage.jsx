import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import ShoppeScene from "./ShoppeScene";
import ForestScene from "./ForestScene"; 
import { useSelector } from "react-redux";

const LeftStage = () => {

  const shoppeValue = useSelector((state) => state.left.shoppeScene);
  const forestValue = useSelector((state) => state.left.forestScene);
  const animalValue = useSelector((state) => state.animal.animalChoice);

  const ShoppeSceneMemo = useMemo(() => {
    return <ShoppeScene />;
  }, []);

  const ForestSceneMemo = useMemo(() => {
    return <ForestScene />;
  }, []);

  return (
    <motion.section className="shoppe">
      <AnimatePresence>
        {shoppeValue && animalValue === "badger" ? (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer background"
          >
            {ShoppeSceneMemo}
          </motion.div>
        ) : null}

        {forestValue ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer "
          >
            {ForestSceneMemo}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default LeftStage;
