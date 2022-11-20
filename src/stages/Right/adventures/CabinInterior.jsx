import cabin from "../assets/loft.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMapScene } from "../../../features/rightSlice";

const CabinInterior = () => {
  // import redux state
  const mapSceneValue = useSelector((state) => state.right.mapScene)
  // define handlers
  const dispatch = useDispatch();
  const handleMapSceneToggle = () => {
    dispatch(toggleMapScene());
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
        style={mapSceneValue ? { pointerEvents: "none" } : null}
        onClick={handleMapSceneToggle}
      ></motion.span>
    </div>
  );
};

export default CabinInterior;
