import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import ShoppeInner from "./ShoppeInner";
import ForestInner from "./ForestInner";
import { useSelector } from "react-redux";

const Shoppe = () => {
  const shoppeInnerStage = useMemo(() => {
    return <ShoppeInner />;
  }, []);

  const forestInnerStage = useMemo(() => {
    return <ForestInner />;
  }, []);

  const shoppeValue = useSelector((state) => state.left.shoppeScene);
  const forestValue = useSelector((state) => state.left.forestScene);
  const animalValue = useSelector((state) => state.animal.animalChoice);

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
            {shoppeInnerStage}
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
            {forestInnerStage}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default Shoppe;
