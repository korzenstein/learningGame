import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { chooseItem } from "../../features/storeSlice";
import { Fragment } from "react";

const ShoppeInner = () => {
  const dispatch = useDispatch();
  const itemsArrayValue = useSelector((state) => state.store.items);

  const handleUserChoice = (choice) => {
    dispatch(chooseItem(choice));
  };

  return (
    <motion.svg
      x={0}
      y={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      // width={1250}
      // height={1536}
      viewBox="0 0 1250 1536"
      xmlSpace="preserve"
    >
      <g className="shoppeInner" fillRule="evenodd" clipRule="evenodd">
        {itemsArrayValue?.map((item, index) => (
          <motion.g
            className="itemImages"
            id={item?.name}
            key={index}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleUserChoice(item)}
          >
            <Fragment 
            key={index}>{item?.component}
            </Fragment>
          </motion.g>
        ))}
      </g>
    </motion.svg>
  );
};

export default ShoppeInner;
