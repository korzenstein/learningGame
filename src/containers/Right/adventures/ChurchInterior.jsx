import { Reorder } from "framer-motion";
import { useState, useRef } from "react";
import PanelA from "../assets/panelLeft.svg";
import PanelB from "../assets/panelCenter.svg";
import PanelC from "../assets/panelRight.svg";
import useRightStore from "../../../store/useRightStore";
import CloseButton from "../../../components/CloseButton/CloseButton";

const ChurchInterior = () => {
  const ref = useRef(null);
  const [items, setItems] = useState([PanelA, PanelB, PanelC]);
  const { mapScene, toggleMapScene } = useRightStore();

  return (
    <>
      <Reorder.Group
        ref={ref}
        className="panelGroup"
        axis="x"
        values={items}
        onReorder={setItems}
      >
        <CloseButton exists={!mapScene} onClick={() => toggleMapScene()} />
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
