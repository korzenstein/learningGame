import "./style/sass/App.scss";
import Animals from "./components/Animals";
import Firelies from "./components/Fireflies";
import Shoppe from "./components/Shoppe";
import MoodBirdBubble from './components/MoodBirdBubble'
import BadgerBubble from "./components/BadgerBubble";
import FoxBubble from "./components/FoxBubble";
import Right from "./components/Right";
// import { Configuration, OpenAIApi } from "openai";

import background from "./assets/backtran.png";
import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loadBadger, setLoadBadger] = useState(false);
  const [loadFox, setLoadFox] = useState(false);
  const [loadMoodBird, setLoadMoodBird] = useState(false)
  const [loadShoppe, setLoadShoppe] = useState(false);
  // Animal Conversations
  const [foxConvo, setFoxConvo] = useState("");
  const [badgerConvo, setBadgerConvo] = useState("");
  const [moodBirdConvo, setMoodBirdConvo] = useState("")
  // Other
  const [animalChoice, setAnimalChoice] = useState("");
  const [userInput, setUserInput] = useState("");
  const [toggleAPI, setToggleAPI] = useState(null)
  const [backColor, setBackColor] = useState("");

  const [aiText, setAiText] = useState(undefined)

  // firebase collection
  const [sessionQuestions, setSessionQuestions] = useState([])


  const handleBadger = () => {
    setAnimalChoice("badger")
    setLoadBadger(!loadBadger);
    setLoadFox(false);
    setLoadMoodBird(false)
  };
  const handleFox = () => {
    setAnimalChoice("fox")
    setLoadFox(!loadFox);
    setLoadBadger(false);
    setLoadMoodBird(false)
  };

  const handleMoodBird = () => {
    setAnimalChoice("moodBird")
    setLoadMoodBird(!loadMoodBird)
    setLoadBadger(false);
    setLoadFox(false);
  }
  const handleShoppe = () => {
    setLoadShoppe(!loadShoppe);
  };

  const getReply = (event) => {
    event.preventDefault();
    setToggleAPI(true)

    if (animalChoice === "fox") {
      setFoxConvo(userInput);
      setSessionQuestions(sessionQuestions => [...sessionQuestions, foxConvo])
      event.target.reset();

    } else if (animalChoice === "badger") {
      setBadgerConvo(userInput);
      setSessionQuestions(sessionQuestions => [...sessionQuestions, badgerConvo])
      event.target.reset();
    } else if (animalChoice === "moodBird") {
      setMoodBirdConvo(userInput);
      setSessionQuestions(sessionQuestions => [...sessionQuestions, moodBirdConvo])
      event.target.reset();
    }
  };

  console.log("user q's", sessionQuestions)

  const handleInput = (event) => {
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
                <p>SHOPPE</p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        <section 
        style={{backgroundColor: aiText}}
        className="sectionContainer">
          <img
            className="inner backImg"
            src={background}
            alt="Illustrated forest setting"
          />
          <Animals 
          handleFox={handleFox} 
          handleBadger={handleBadger}
          handleMoodBird={handleMoodBird} />
          <BadgerBubble 
          userInput={userInput}
          toggleAPI={toggleAPI}
          badgerConvo={badgerConvo}
          loadBadger={loadBadger} 
          handleShoppe={handleShoppe} />
          <FoxBubble 
          userInput={userInput}
          toggleAPI={toggleAPI}
          foxConvo={foxConvo}
          loadFox={loadFox} />
          <MoodBirdBubble 
          aiText={aiText}
          setAiText={setAiText}
          userInput={userInput}
          toggleAPI={toggleAPI}
          moodBirdConvo={moodBirdConvo}
          loadMoodBird={loadMoodBird} />
          <Firelies />
          <AnimatePresence exitBeforeEnter initial={false}>
          {loadFox || loadBadger || loadMoodBird ? (
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
        <motion.section 
        className="uiRight">
          <Right/>
        </motion.section>
      </div>
    </main>
  );
}

export default App;
