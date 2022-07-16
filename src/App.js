// import "./App.css";
import "./style/sass/App.scss";
import Animals from "./components/Animals";
// import RacoonText from "./components/RacoonText";
import Firelies from "./components/Fireflies"
import Shoppe from "./components/Shoppe";
import Alt from "./components/Alt"
import background from "./assets/back3.png";
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function App() {
  const [loadRacoon, setLoadRacoon] = useState(false)
  const [loadShoppe, setLoadShoppe] = useState(false)

  const handleRacoon = () => {
    setLoadRacoon(!loadRacoon)
  }
  const handleShoppe = () => {
    setLoadShoppe(!loadShoppe)
  }

  return (
    <main className="main">
      <div className="wrapper">
        <AnimatePresence exitBeforeEnter initial={false}>
        {
          loadShoppe ?
          <Shoppe
        handleShoppe={handleShoppe}
        />
        : 
        <motion.section 
        initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
        className="uiLeft">
          <div className="textBox">
            <p>UI 1</p>
            
            </div>

        </motion.section>
        }
</AnimatePresence>

        
        <section className="sectionContainer">
          <img className="inner backImg" src={background} alt="background" />
          <Animals
          handleRacoon={handleRacoon}
           />
          {/* <RacoonText/> */}
          <Alt
          loadRacoon={loadRacoon}
          handleShoppe={handleShoppe}
          />
          <Firelies/>
        </section>
        <section className="uiRight">
          <div className="textBox">
            <p>UI 2</p>
            <p>Information</p>
            <p>Images</p>
            </div>

        </section>
        

        {/* <RacoonText/> */}
        
      </div>
    </main>
  );
}

export default App;
