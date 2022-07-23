import { motion, AnimatePresence } from "framer-motion";
import Items from "./Items";

const Shoppe = ({ handleShoppe, loadShoppe, animalChoice, shoppeArray }) => {
  return (
    <motion.section className="shoppeContainer">
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadShoppe && animalChoice === "badger" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, rotate: 360 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppe"
          >
            <p>UI 1</p>
            <p>Fruits</p>
            <p>Clothes</p>
            <p>Potions</p>
            <p>Health</p>
            {shoppeArray.map((item) => {
              return <Items url={item.url} id={item.id} alt={item.alt} />;
            })}
            <button onClick={handleShoppe}>X</button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default Shoppe;
