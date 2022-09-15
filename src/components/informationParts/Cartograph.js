import {motion} from 'framer-motion'
import cartograph from "../../assets/cartograph.png";

const Cartograph = ({toggler}) => {
    return (
        <>
        <motion.img
              className="mapImage inner"
              initial={{ opacity: 0 }}
              animate={
                toggler === true
                  ? { opacity: 0.5, zIndex: 30 }
                  : { opacity: 0, zIndex: 20 }
              }
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              src={cartograph}
              alt="Map of lands"
            />
        </>
    )
}
export default Cartograph