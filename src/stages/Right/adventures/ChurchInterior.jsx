import { Reorder, motion } from "framer-motion";
import { useState, useRef } from "react";
import PanelA from "../assets/panelLeft.svg";
import PanelB from "../assets/panelCenter.svg";
import PanelC from "../assets/panelRight.svg";
import useRightStore from "../../../store/useRightStore";

const ChurchInterior = () => {
  const ref = useRef(null);
  const [items, setItems] = useState([PanelA, PanelB, PanelC]);
  const { mapScene, toggleMapScene } = useRightStore();

  const handleMapSceneToggle = () => {
    toggleMapScene();
  };

  return (
    <>
      <Reorder.Group
        ref={ref}
        className="panelGroup"
        axis="x"
        values={items}
        onReorder={setItems}
      >
        <motion.span
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className="closeAdventure"
          style={mapScene ? { pointerEvents: "none" } : null}
          onClick={handleMapSceneToggle}
        ></motion.span>
        {items.map((item, index) => (
          <Reorder.Item id={item} key={item} value={item}>
            <img src={item} alt={item} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};

export default ChurchInterior;
