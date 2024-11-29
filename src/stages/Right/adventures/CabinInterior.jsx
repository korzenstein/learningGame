import cabin from "../assets/loft.png";
import { motion } from "framer-motion";
import useRightStore from "../../../store/useRightStore";

const CabinInterior = () => {
  const { mapScene, toggleMapScene } = useRightStore();

  const handleMapSceneToggle = () => {
    toggleMapScene();
  };

  return (
    <div className="farm">
      <img src={cabin} alt="Cabin exterior" />
      <motion.span
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        className="closeAdventure"
        style={mapScene ? { pointerEvents: "none" } : null}
        onClick={handleMapSceneToggle}
      ></motion.span>
    </div>
  );
};

export default CabinInterior;
