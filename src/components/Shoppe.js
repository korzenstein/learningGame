import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import ShoppeInner from "./ShoppeInner";
import forest from '../assets/forest2.png'
import Flower from './forestParts/Flower'

const Shoppe = ({
  handleShoppe,
  loadShoppe,
  animalChoice,
  shoppeArray, 
  setShoppeArray,
  itemChoice,
  setItemChoice,
  goBack, 
  forestBird
}) => {
  

   const shoppeInnerStage = useMemo(() => {
    return (
    <ShoppeInner/>)
  }, [])

                    
console.log(forestBird)

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
            {shoppeInnerStage}
                  </motion.div>          
            ) : 
            null
            }
          

        {
          forestBird ? (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppeContainer "
          >
            <motion.img
              className="forest inner"
              initial={{ opacity: 0 }}
              animate={{opacity: [0.55, 1, 0.55] }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 17, repeat: Infinity }}
              // transition={{ ease: "easeInOut", duration: 0.5 }}
              src={forest}
              alt="Scene of the forest interior"
            />
            {/* <Flower/> */}
          </motion.div>

          ) : null
        }
      </AnimatePresence>
    </motion.section>
  );
};

export default Shoppe;
