import {motion} from 'framer-motion'
import cartograph from "../assets/cartographBackground.png";
import { useSelector } from 'react-redux'

const CartographBackground = () => {
  const mapSceneValue = useSelector((state) => state.right.mapScene)
    return (
        <>
        <motion.img
              className="mapImage inner"
              initial={{ opacity: 0 }}
              animate={
                mapSceneValue === true
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
export default CartographBackground