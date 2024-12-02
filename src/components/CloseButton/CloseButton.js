import { motion } from "framer-motion";

const CloseButton = ({ exists = true, onClick }) => {
  if (!exists) {
    return null;
  }

  return (
    <motion.span
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      className="closeAdventure"
      onClick={onClick}
    />
  );
};

export default CloseButton;
