import { motion } from "framer-motion";
import ChurchInterior from "./adventures/ChurchInterior";
import FarmInterior from "./adventures/FarmInterior";
import CabinInterior from "./adventures/CabinInterior";

const AdventureStage = ({ advChoice, toggler, setToggler, toggleMap }) => {
  const advOptions = {
    cabinInterior: [
      <CabinInterior setToggler={setToggler} toggler={toggler} />,
    ],
    churchInterior: [
      <ChurchInterior setToggler={setToggler} toggler={toggler} />,
    ],
    farmInterior: [<FarmInterior toggler={toggler} setToggler={setToggler} />],
  };
  return (
    <motion.div
      // onClick={() => setToggler(!toggler)}
      className="adventures inner"
      initial={{ opacity: 0 }}
      animate={
        toggler === false
          ? { opacity: 1, zIndex: 100 }
          : { opacity: 0, zIndex: 20 }
      }
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      // src={imageOptions[advChoice]}
    >
      {advOptions[advChoice]}
    </motion.div>
  );
};
export default AdventureStage;
