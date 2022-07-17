import "./style/sass/App.scss";
import Animals from "./components/Animals";
import Firelies from "./components/Fireflies";
import Shoppe from "./components/Shoppe";
import BadgerBubble from "./components/BadgerBubble";
import FoxBubble from "./components/FoxBubble";

import background from "./assets/back3.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loadBadger, setLoadBadger] = useState(false);
  const [loadFox, setLoadFox] = useState(false);
  const [loadShoppe, setLoadShoppe] = useState(false);
  const [foxConvo, setFoxConvo] = useState("");
  const [badgerConvo, setBadgerConvo] = useState("");
  const [animalChoice, setAnimalChoice] = useState("");
  const [userInput, setUserInput] = useState("");
  const [toggleAPI, setToggleAPI] = useState(null)

  const handleBadger = () => {
    setAnimalChoice("badger")
    setLoadBadger(!loadBadger);
    setLoadFox(false);

  };
  const handleFox = () => {
    setAnimalChoice("fox")
    setLoadFox(!loadFox);
    setLoadBadger(false);
    ;
  };
  const handleShoppe = () => {
    setLoadShoppe(!loadShoppe);
  };

  const getReply = (event) => {
    event.preventDefault();
    setToggleAPI(true)

    if (animalChoice === "fox") {
      setFoxConvo(userInput);
      event.target.reset();

    } else if (animalChoice === "badger") {
      setBadgerConvo(userInput);
      event.target.reset();
      
    }
  };

  const handleInput = (event) => {
  // console.log(event.target.value)
    setUserInput(event.target.value);
  }

  

  return (
    <main className="main">
      <div className="wrapper">
        <AnimatePresence exitBeforeEnter initial={false}>
          {loadShoppe ? (
            <Shoppe handleShoppe={handleShoppe} />
          ) : (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="uiLeft"
            >
              <div className="textBox">
                <p>UI 1</p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        <section className="sectionContainer">
          <img
            className="inner backImg"
            src={background}
            alt="Illustrated forest setting"
          />
          <Animals handleFox={handleFox} handleBadger={handleBadger} />
          <BadgerBubble 
          userInput={userInput}
          toggleAPI={toggleAPI}
          setBadgerConvo={setBadgerConvo}
          animalChoice={animalChoice}
          badgerConvo={badgerConvo}
          loadBadger={loadBadger} 
          handleShoppe={handleShoppe} />
          <FoxBubble 
          foxConvo={foxConvo}
          loadFox={loadFox} 
          handleShoppe={handleShoppe} />
          <Firelies />
          <AnimatePresence exitBeforeEnter initial={false}>
          {loadFox || loadBadger ? (
            <motion.form 
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            onSubmit={getReply} 
            onChange={handleInput}
            className="inner userBubble">
            <input 
            className="userText" type="text" />
            </motion.form>
          ) : null}
          </AnimatePresence>
        </section>
        <section className="uiRight">
          <div className="textBox">
            <p>UI 2</p>
            <p>Information</p>
            <p>Images</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
