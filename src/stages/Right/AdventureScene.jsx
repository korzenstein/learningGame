import { motion } from "framer-motion";
import ChurchInterior from "./adventures/ChurchInterior";
import FarmhouseInterior from "./adventures/FarmhouseInterior";
import CabinInterior from "./adventures/CabinInterior";
import useRightStore from "../../store/useRightStore";


const AdventureStage = () => {
    const { mapScene, adventure } = useRightStore();

  const advOptions = {
    cabinInterior: [
      <CabinInterior />,
    ],
    churchInterior: [
      <ChurchInterior />,
    ],
    farmInterior: [<FarmhouseInterior  />],
  };
  return (
    <motion.div
      className="adventures inner"
      initial={{ opacity: 0 }}
      animate={
        mapScene === false
          ? { opacity: 1, zIndex: 100 }
          : { opacity: 0, zIndex: 20 }
      }
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {advOptions[adventure]}
    </motion.div>
  );
};
export default AdventureStage;
