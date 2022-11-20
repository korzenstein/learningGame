import { Reorder, motion } from "framer-motion";
import { useState, useRef } from "react";
import PanelA from "../assets/panelLeft.svg";
import PanelB from "../assets/panelCenter.svg";
import PanelC from "../assets/panelRight.svg";

import { useDispatch, useSelector } from "react-redux";
import { toggleMapScene } from "../../../features/rightSlice";

const ChurchInterior = () => {
  // import redux state / usestate
  const ref = useRef(null);
  const [items, setItems] = useState([PanelA, PanelB, PanelC]);
  const mapSceneValue = useSelector((state) => state.right.mapScene)

  // define handlers
  const dispatch = useDispatch();
  const handleMapSceneToggle = () => {
    dispatch(toggleMapScene());
  };

  // useEffect(() => {
  //   const myArray = ref.current.children;

  //   const newArray = [...myArray];
  //   const numberArray = newArray.map((item) => Number(item.id));

  //   const example1 = [2, 1, 0];
  //   const example2 = [2, 1, 0];

  //   if (example1 === example2) {
  //     console.log("match");
  //   }
  // }, [items]);

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
          style={mapSceneValue ? { pointerEvents: "none" } : null}
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
