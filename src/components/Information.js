import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import InformationInner from "./InformationInner";
import Cartograph from "./informationParts/Cartograph";
import Adventure from "./informationParts/Adventure";

const Information = ({ loadMap, setLoadMap }) => {
  const [toggler, setToggler] = useState(true);
  const [imageChoice, setImageChoice] = useState("church");


  const handleImageChoice = (option) => {
    setToggler(false);
    setImageChoice((prev) => option);
    console.log("this", option);
  };

  const toggleMap = () => {
    setToggler(false);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        console.log(ref.current)
        if (loadMap && ref.current && !ref.current.contains(event.target)) {
          setLoadMap(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <motion.section className="information">
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadMap ? (
          <motion.div
            ref={wrapperRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="infoContainer "
          >
            <Adventure
            toggler={toggler}
            setToggler={setToggler}
            imageChoice={imageChoice}
            />
            <Cartograph
            toggler={toggler}
            />
            <InformationInner
              toggler={toggler}
              toggleMap={toggleMap}
              handleImageChoice={handleImageChoice}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};
export default Information;
