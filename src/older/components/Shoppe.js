import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import ShoppeInner from "./ShoppeInner";
import forest from '../assets/forest2.png'
import Flower from './forestParts/Flower'
import ForestInner from './ForestInner'

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

 
    const forestInnerStage = useMemo(() => {
    return (
    <ForestInner/>)
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
            
            {forestInnerStage}
          </motion.div>
            

          ) : null
        }
      </AnimatePresence>
    </motion.section>
  );
};

export default Shoppe;
