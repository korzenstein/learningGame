import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    
  },
};

const NavItems = ({ i }) => {
  const letters = ["A", "B", "C"];
  const colors = ["#FF008C", "#D309E1", "#9C1AFF"];
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="navItems"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icons" style={style}>
        <p>{letters[i]}</p>
      </div>
    </motion.li>
  );
};

export default NavItems;
