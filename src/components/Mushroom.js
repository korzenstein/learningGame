import {motion } from 'framer-motion'
const Mushroom = ({handleMushCount}) => {
    console.log(handleMushCount)
    return (
        <motion.g 
        whileTap={{scale: 1.5}}
        onClick={() => handleMushCount(2)}
        id='mushroom2'>
          <path
            fill='#9B8359'
            d='M18.961 205.229c-.078.135-.167.264-.23.404-.36.809-.722.95-1.139.031-.068-.149-.058-.416-.352-.407-.633.272.454.928-.202 1.104-.359.097-.848.259-1.199-.148-.021-.155-.064-.289-.258-.288l.007.013c.16-.425-.151-.754-.24-1.126-.375-1.57.04-1.997 1.649-2.12.67-.051 1.154.281 1.74.337l-.009-.007c-.021.188.057.277.25.25l-.006-.008-.011 1.965z'
          ></path>
          <path
            fill='#744329'
            d='M13.666 201.578c.417-.216.667-.708 1.203-.73-.113.578-.09.992.647.534.27-.167.535-.342.802-.514l.487-.03.459-.003c.315.124.499.582.925.411.988-.396 1.163.257 1.299.977l-5.356.113.02.02-.486-.778z'
          ></path>
          <path
            fill='#3F3129'
            d='M14.132 202.335l5.355-.112c.578.173.696-.149.684-.626-.013-.476-.015-.952-.021-1.428l.035-.035c.859.621.427 1.503.365 2.255-.021.269-.577.573-1.056.224-.043-.032-1.002-.613-.757.417-.586-.056-1.069-.388-1.74-.337-1.609.123-2.024.55-1.649 2.12.089.372.4.701.24 1.126-.695-.387-.713-1.051-.72-1.728-.006-.716.279-1.554-.736-1.876z'
          ></path>
          <path
            fill='#BC6337'
            d='M17.264 200.834l-.459.004c-.175-.21-.337-.198-.487.029-.267.171-.532.346-.802.514-.737.458-.761.044-.647-.534l-.004.021c.177.014.259-.067.245-.245l-.004.005c.176.014.262-.064.244-.244l-.004.004c.169.024.259-.071.316-.213l.31-.244c.994-.118 1.935-.869 2.992-.253-.388.65-1.465.284-1.7 1.156z'
          ></path>
          <path
            fill='#3F3129'
            d='M18.963 199.679c-1.057-.616-1.998.135-2.992.253 1.054-.929 2.5-1.036 3.733-.275l-.031.032-.71-.01zM18.961 205.229l.011-1.965c.709.658.719 1.314-.011 1.965zM13.666 201.578l.485.777c-.391-.116-.947-.128-.485-.777zM19.705 199.657l.24.24-.031.029c-.153-.005-.233-.085-.24-.237l.031-.032z'
          ></path>
          <path
            fill='#3F3129'
            d='M19.945 199.896l.24.237-.035.035c-.162 0-.235-.086-.236-.243l.031-.029z'
          ></path>
          <path
            fill='#744329'
            d='M15.661 200.176c-.057.143-.146.237-.316.213.03-.183.141-.246.316-.213z'
          ></path>
          <path
            fill='#744329'
            d='M15.349 200.385c.018.18-.068.258-.244.244.012-.15.094-.232.244-.244z'
          ></path>
          <path
            fill='#744329'
            d='M15.109 200.625c.014.178-.068.259-.245.245.01-.155.091-.236.245-.245z'
          ></path>
          <path
            fill='#3F3129'
            d='M15.582 205.925c.194-.001.238.133.258.288l-.258-.288zM18.979 203.271c-.194.027-.271-.062-.25-.25l.25.25z'
          ></path>
          <path
            fill='#9F592F'
            d='M19.914 199.926c.001.156.074.243.236.243.006.476.009.953.021 1.428.012.477-.106.8-.684.626-.136-.72-.311-1.374-1.298-.978-.426.171-.609-.287-.925-.411.234-.873 1.312-.507 1.699-1.156l.711.01c.007.153.087.232.24.238zM16.318 200.868c.149-.228.312-.24.487-.029l-.487.029z'
          ></path>
        </motion.g>
    )
}

export default Mushroom