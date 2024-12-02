import { motion } from "framer-motion";
import useShoppeStore from "../../store/useShoppeStore";

const ShoppeInner = () => {
  const { items, chooseItem } = useShoppeStore();

  const handleUserChoice = (choice) => {
    chooseItem(choice);
  };

  return (
    <motion.svg
      x={0}
      y={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewBox="0 0 1250 1536"
      xmlSpace="preserve"
    >
      <g className="shoppeInner" fillRule="evenodd" clipRule="evenodd">
        {items?.map((item, index) => (
          <motion.g
            className="itemImages"
            id={item?.id}
            key={index}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleUserChoice(item)}
          >
            {typeof item.component === "string" ? (
              <motion.image
                href={item.component} 
                x={item.x} 
                y={item.y}
                width={item.width}
                height={item.height}
                alt={item.name}
                onClick={() => handleUserChoice(item)}
              />
            ) : (
              item.component
            )}
          </motion.g>
        ))}
      </g>
    </motion.svg>
  );
};

export default ShoppeInner;
