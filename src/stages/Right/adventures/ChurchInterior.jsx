import { Reorder, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PanelA from "../assets/panelLeft.svg";
import PanelB from "../assets/panelCenter.svg";
import PanelC from "../assets/panelRight.svg";

const ChurchInterior = ({ toggleMap, setToggler, toggler }) => {
  const ref = useRef(null);
  const [items, setItems] = useState([PanelA, PanelB, PanelC]);
  // console.log(ref.current.children.id)
  //  console.log(ref.current.children)

  useEffect(() => {
    const myArray = ref.current.children;

    const newArray = [...myArray];
    // console.log(newArray)
    const numberArray = newArray.map((item) => Number(item.id));
    // console.log(numberArray)

    const example1 = [2, 1, 0];
    const example2 = [2, 1, 0];

    if (example1 === example2) {
      console.log("match");
    }
  }, [items]);

  const mapOff = () => {
    setToggler((prev) => !toggler);
    console.log("change");
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
          style={toggler ? { pointerEvents: "none" } : null}
          onClick={mapOff}
        ></motion.span>
        {items.map((item, index) => (
          <Reorder.Item id={item} key={item} value={item}>
            <img src={item} alt={item} />
            {/* {console.log(item)} */}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};

export default ChurchInterior;
