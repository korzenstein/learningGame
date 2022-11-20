import farmexterior from "../assets/farmexterior.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMapScene } from "../../../features/rightSlice";

const FarmInterior = () => {
  const mapSceneValue = useSelector((state) => state.right.mapScene)

  const dispatch = useDispatch();

  const handleMapSceneToggle = () => {
    dispatch(toggleMapScene());
  };

  return (
    <div className="farm">
      <img src={farmexterior} alt="Cabin exterior" />
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
export default FarmInterior;
