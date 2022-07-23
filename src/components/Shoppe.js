import { motion, AnimatePresence } from "framer-motion";

// const testVariant = {

// }

const Shoppe = ({ handleShoppe }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="uiLeft"
      >
        <div className="shoppeContainer">
          <motion.div>

          </motion.div>
          <p>UI 1</p>
          <p>Fruits</p>
          <p>Clothes</p>
          <p>Potions</p>
          <p>Health</p>
          <button onClick={handleShoppe}>X</button>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Shoppe;
