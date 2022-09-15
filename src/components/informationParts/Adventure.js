import {motion} from 'framer-motion'
import {imageOptions} from './imageOptions.js'

const Adventure = ({imageChoice, toggler, setToggler}) => {
    return (
        <>
        <motion.img
              onClick={() => setToggler(!toggler)}
              className="adventures inner"
              initial={{ opacity: 0 }}
              animate={
                toggler === false
                  ? { opacity: 1, zIndex: 100 }
                  : { opacity: 0, zIndex: 20 }
              }
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              src={imageOptions[imageChoice]}
              alt="Advenuture panel"
            />
        </>
    )
}
export default Adventure