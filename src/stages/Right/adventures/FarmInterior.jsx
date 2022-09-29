  import farmexterior from '../assets/farmexterior.png'
 import {motion} from 'framer-motion'
 
const FarmInterior = ({setToggler, toggler}) => {
    const mapOff = () => {
    setToggler((prev) => !toggler);
    console.log("change");
  };
    return (

        <div
        className="farm"
        >
        <img 
        
        src={farmexterior} alt="Cabin exterior" />
        <motion.span
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className="closeAdventure"
          style={toggler ? { pointerEvents: "none" } : null}
          onClick={mapOff}
        ></motion.span>
        </div>
    )
}
export default FarmInterior

