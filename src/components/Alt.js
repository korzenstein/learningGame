import racoonTalk from '../textData/racoonTalk'
import {motion, AnimatePresence} from 'framer-motion'

const Alt = ({loadRacoon, handleShoppe}) => {

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
                <p 
                onClick={() => (console.log('words'))}
                className="altText">{racoonTalk.main.intro}
                
                <button 
                className="testButton"
                onClick={handleShoppe}>Shoppe Here!</button>
                </p>
                </motion.div>
                :null
            }
            </AnimatePresence>
        </>
    )
}
export default Alt