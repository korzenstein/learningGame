import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import ShoppeScene from "./ShoppeScene";
import ForestScene from "./ForestScene";
import useLeftStore from "store/useLeftStore";
import useAnimalStore from "store/useAnimalStore";
import useShoppeStore from "store/useShoppeStore";

const LeftStage = () => {

  const { shoppeScene, forestScene } = useLeftStore();
  const { animalChoice } = useAnimalStore();
  const { userChoice } = useShoppeStore();

  const ShoppeSceneMemo = useMemo(() => {
    return <ShoppeScene />;
  }, []);

  const ForestSceneMemo = useMemo(() => {
    return <ForestScene />;
  }, []);
  return (
    <motion.section className="leftStage">
      <AnimatePresence>
        {shoppeScene === true && animalChoice === "badger" ? (
          <motion.div
            initial={{ opacity: 0, zIndex: 20 }}
            animate={{ opacity: 1, zIndex: 100 }}
            exit={{ opacity: 0, zIndex: 20 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer background"
          >
            {userChoice?.name !== undefined ? (
              <motion.p className="userChoice">
                {userChoice.name}
                <span>{`£${userChoice.price}`}</span>
              </motion.p>
            ) : null}

            {ShoppeSceneMemo}
          </motion.div>
        ) : null}

        {forestScene ? (
          <motion.div
            initial={{ opacity: 0, zIndex: 20 }}
            animate={{ opacity: 1, zIndex: 100 }}
            exit={{ opacity: 0, zIndex: 20 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer"
          >
            {ForestSceneMemo}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default LeftStage;
