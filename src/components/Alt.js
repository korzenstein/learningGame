import racoonTalk from '../textData/racoonTalk'
import {motion, AnimatePresence} from 'framer-motion'

const Alt = ({loadRacoon}) => {

    return (
        <>
              <AnimatePresence exitBeforeEnter initial={false}>

        {
                loadRacoon ?
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inner alt">
                <p className="altText">{racoonTalk.main.intro}</p>
                </motion.div>
                :null
            }
            </AnimatePresence>
        </>
    )
}
export default Alt