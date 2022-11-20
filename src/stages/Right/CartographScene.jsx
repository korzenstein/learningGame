import { motion } from "framer-motion";
import Church from "./cartographPuppets/Church";
import Boats from "./cartographPuppets/Boats";
import Farmhouse from "./cartographPuppets/Farmhouse";
import Cabin from "./cartographPuppets/Cabin";
import { useSelector } from "react-redux";

const CartographStage = () => {
  const mapSceneValue = useSelector((state) => state.right.mapScene);

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={mapSceneValue ? { opacity: 1 } : { opacity: 0 }}
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
        <Church />
        <Boats />
        <Cabin />
        <Farmhouse />
      </g>
    </motion.svg>
  );
};

export default CartographStage;
