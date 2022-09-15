import { motion } from "framer-motion";
import Church from "./cartograph/Church";
import Boats from "./cartograph/Boats";
import Farmhouse from "./cartograph/Farmhouse";
import Cabin from "./cartograph/Cabin";
const CartographStage = ({ handleImageChoice, toggleMap, toggler }) => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={toggler ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      //   width="563.93"
      //   height="751.906"
      //   x="0"
      //   y="0"
      className="inner boats"
      version="1.1"
      viewBox="0 0 563.93 751.906"
      xmlSpace="preserve"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <Church 
        toggleMap={toggleMap}
        handleImageChoice={handleImageChoice} 
         />
        <Boats 
        toggleMap={toggleMap}
        handleImageChoice={handleImageChoice}
        />
        <Cabin 
        toggleMap={toggleMap}
        handleImageChoice={handleImageChoice}
        />
        <Farmhouse 
        toggleMap={toggleMap}
        handleImageChoice={handleImageChoice}
        />
      </g>
    </motion.svg>
  );
};

export default CartographStage;
