// import {motion} from 'framer-motion'
import VialA from "./shoppeItems/VialA";
import VialB from "./shoppeItems/VialB";
import VialC from "./shoppeItems/VialC";
import Gloves from "./shoppeItems/Gloves";
import Mug from "./shoppeItems/Mug";
import Pencil from "./shoppeItems/Pencil";
import Branches from "./shoppeItems/Branches";
import WhiteWillow from "./shoppeItems/WhiteWillow";
import BlackAsh from "./shoppeItems/BlackAsh";
import Book from "./shoppeItems/Book";
import Coffee from "./shoppeItems/Coffee";
import Shears from "./shoppeItems/Shears";
import Rations from "./shoppeItems/Rations";
import Mushrooms from "./shoppeItems/Mushrooms";
import MortarPestal from "./shoppeItems/MortarPestal";
import Sachel from "./shoppeItems/Sachel";

import { motion } from "framer-motion";
import {useEffect} from "react"



const ShoppeInner = () => {
  useEffect(() => {
    console.log('useEffect')
  }, [])
return (
  <motion.svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
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
      <path
        fill="#8B5541"
        d="M529.062 436.061c-5.395-.435-5.671-1.135-3.745-7.695 1.607-5.475 8.108-8.855 13.479-7.639 4.634 1.051 6.4 4.416 3.872 8.377-2.674 4.189-6.353 7.297-13.606 6.957zm10.584-11.604c-7.076-1.239-8.41-.574-10.944 5.188-.391.89-1.122 1.846-.347 2.717.956 1.072 2.165.519 3.132-.109 3.162-2.055 5.866-4.593 8.159-7.796z"
      />
      <path
        fill="#E96A50"
        d="M539.646 424.457c-2.293 3.203-4.996 5.741-8.159 7.795-.967.628-2.176 1.182-3.132.109-.775-.871-.044-1.827.347-2.717 2.533-5.761 3.867-6.426 10.944-5.187z"
      />
      <Pencil />
      <Branches />
      <Mug />
      <VialB />
      <VialA />
      <Gloves />
      <WhiteWillow />
      <Sachel />
      <VialC />
      <Mushrooms />
      <Shears />
      <Book />
      <BlackAsh />
      <Coffee />
      <MortarPestal />
      <Rations />
    </g>
  </motion.svg>
  

  
)
}

export default ShoppeInner;
