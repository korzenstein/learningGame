import { motion } from "framer-motion";
import NavItems from "./NavItems";
import { useSelector } from "react-redux";

const InventoryNav = () => {
  const titleValue = useSelector((state) => state.animal.title);

  const navVariants = {
    open: {
      scale: 1,
    },
    closed: {
      scale: 0,
      transition: {
        delay: 0.35,
      },
    },
  };

  const ulVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemIds = [0, 1, 2];

  return (
    <motion.nav
      initial={false}
      animate={titleValue ? "open" : "closed"}
      className="nav"
      variants={navVariants}
    >
      <motion.ul 
      initial={false}
      variants={ulVariants} 
      className="inventory">

        {itemIds.map((i) => (
          <NavItems i={i} key={i} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};
export default InventoryNav;