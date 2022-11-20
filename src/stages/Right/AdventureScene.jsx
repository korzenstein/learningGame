import { motion } from "framer-motion";
import ChurchInterior from "./adventures/ChurchInterior";
import FarmhouseInterior from "./adventures/FarmhouseInterior";
import CabinInterior from "./adventures/CabinInterior";
import { useSelector } from 'react-redux'


const AdventureStage = () => {
  const mapSceneValue = useSelector((state) => state.right.mapScene)
  const adventureValue = useSelector((state) => state.right.adventure)

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
        mapSceneValue === false
          ? { opacity: 1, zIndex: 100 }
          : { opacity: 0, zIndex: 20 }
      }
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {advOptions[adventureValue]}
    </motion.div>
  );
};
export default AdventureStage;
